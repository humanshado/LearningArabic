#!/usr/bin/env python3
"""Build the course: one self-contained HTML page per lesson + a course home page.

    python3 build.py              -> docs/  (GitHub Pages site: docs/index.html + docs/b1-01.html ...)
    python3 build.py --standalone -> dist/ (lesson pages with no link back to the course home)

Each lesson lives in src/lessons/<id>.js and calls LESSONS.push({...}).
"""
import json, re, sys, html, pathlib, subprocess

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
standalone = "--standalone" in sys.argv
OUT = ROOT / ("dist" if standalone else "docs")
OUT.mkdir(exist_ok=True)

css = (SRC / "style.css").read_text(encoding="utf-8")
engine = (SRC / "engine.js").read_text(encoding="utf-8")
FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap" rel="stylesheet">'

def page(title, body_scripts):
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}</title>{FONTS}<style>{css}</style></head>
<body>{body_scripts}</body></html>
"""

def meta(path):
    """Pull title fields out of a lesson file with node (falls back to regex)."""
    js = f"global.LESSONS=[];{path.read_text(encoding='utf-8')};console.log(JSON.stringify(LESSONS[0]))"
    try:
        out = subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout
        return json.loads(out)
    except Exception:
        t = path.read_text(encoding="utf-8")
        g = lambda k: (re.search(rf'{k}:\s*"([^"]*)"', t) or [None, ""])[1]
        return {"id": g("id"), "book": int(g("book") or 1), "num": int(re.search(r"num:\s*(\d+)", t)[1]),
                "title": g("title"), "titleAr": g("titleAr"), "unitEn": g("unitEn"), "covers": g("covers")}

lessons = []
for f in sorted((SRC / "lessons").glob("*.js")):
    m = meta(f); lessons.append(m)
    home = "" if standalone else 'window.COURSE_HOME="index.html";'
    scripts = f"<script>window.LESSONS=[];{home}</script><script>{f.read_text(encoding='utf-8')}</script><script>{engine}</script>"
    (OUT / f"{m['id']}.html").write_text(page(f"{m['title']} · Arabic Book {m['book']}", scripts), encoding="utf-8")
    print("built", OUT / f"{m['id']}.html")

def test_meta(path):
    js = f"global.window={{}};{path.read_text(encoding='utf-8')};console.log(JSON.stringify(window.TEST))"
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout)

tests = []
lesson_files = {f.stem: f for f in (SRC / "lessons").glob("*.js")}
for f in sorted((SRC / "tests").glob("*.js")) if (SRC / "tests").exists() else []:
    t = test_meta(f); tests.append(t)
    home = "" if standalone else 'window.COURSE_HOME="index.html";'
    covered = "".join(f"<script>{lesson_files[c].read_text(encoding='utf-8')}</script>" for c in t["covers"])
    scripts = f"<script>window.LESSONS=[];{home}</script>{covered}<script>{f.read_text(encoding='utf-8')}</script><script>{engine}</script>"
    (OUT / f"{t['id']}.html").write_text(page(f"{t['title']} · Arabic Book {t['book']}", scripts), encoding="utf-8")
    print("built", OUT / f"{t['id']}.html")

if not standalone:
    books = {1: "Book 1", 2: "Book 2", 3: "Book 3", 4: "Book 4"}
    parts = []
    for b, name in books.items():
        ls = sorted([l for l in lessons if l["book"] == b], key=lambda l: l["num"])
        def lcard(l):
            return (f'<a class="card lesson-link" href="{l["id"]}.html" style="margin-bottom:10px" data-id="{l["id"]}">'
            f'<span class="n">{l["num"]}</span><span style="flex:1"><b>{html.escape(l["title"])}</b><br>'
            f'<span class="ar">{html.escape(l["titleAr"])}</span><br><span class="muted" style="font-size:13px">{html.escape(l.get("covers",""))}</span></span>'
            f'<span class="prog muted"></span></a>')
        def tcard(t):
            return (f'<a class="card lesson-link test-link" href="{t["id"]}.html" style="margin-bottom:10px;border-color:var(--accent);background:var(--accent-soft)" data-test="{t["id"]}">'
            f'<span class="n">📝</span><span style="flex:1"><b>{html.escape(t["title"])}</b><br>'
            f'<span class="ar">{html.escape(t["titleAr"])}</span><br><span class="muted" style="font-size:13px">{html.escape(t["pages"])} · book test + mastery test</span></span>'
            f'<span class="prog muted"></span></a>')
        bt = [t for t in tests if t["book"] == b]
        items = "".join(lcard(l) + "".join(tcard(t) for t in bt if t["after"] == l["num"]) for l in ls) or '<div class="card soon">Coming soon</div>'
        parts.append(f'<section class="book"><h2>{name} <span class="ar" style="font-size:22px">· الكِتابُ {["","الأَوَّلُ","الثّانِي","الثّالِثُ","الرّابِعُ"][b]}</span></h2>{items}</section>')
    body = f"""<main style="max-width:820px">
<div class="card hero" style="margin-top:10px"><div><div class="ar" style="font-size:40px">العَرَبِيَّةُ بَيْنَ يَدَيْكَ</div>
<h2>Arabic in Your Hands: interactive course</h2>
<p class="lead">Interactive lessons that follow the <a href="https://www.youtube.com/playlist?list=PLDS9YrkKMtPR4-S3ih8wad7oXMyrdEdXY" target="_blank" rel="noopener">Al-Lisan video series</a>. Each lesson has dialogues with audio, vocabulary flashcards, grammar builders, pronunciation drills, listening games, quizzes and speaking role-plays.</p></div></div>
{''.join(parts)}</main>
<script>
try{{const S=JSON.parse(localStorage.getItem("arabic-course-v1")||"{{}}");
document.querySelectorAll("[data-id]").forEach(a=>{{const l=(S.lessons||{{}})[a.dataset.id];if(!l)return;const n=Object.keys(l.done||{{}}).length;
a.querySelector(".prog").textContent=(n>=8?"✓ ":"")+n+"/8"+(l.best&&l.best.practice!=null?" · quiz "+l.best.practice+"%":"");}});
document.querySelectorAll("[data-test]").forEach(a=>{{const t=(S.tests||{{}})[a.dataset.test];if(!t||!t.attempts.length)return;const b=m=>{{const x=t.attempts.filter(y=>y.mode===m);return x.length?Math.max(...x.map(y=>y.pct))+"%":"—"}};
a.querySelector(".prog").textContent="book "+b("book")+" · mastery "+b("mastery");}});}}catch(e){{}}
</script>"""
    (OUT / "index.html").write_text(page("Arabic in Your Hands · Interactive course", body), encoding="utf-8")
    print("built", OUT / "index.html")
