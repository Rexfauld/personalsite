from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus.flowables import Flowable
import os

OUTPUT_PATH = "C:/Users/Mr.P/Documents/personalsite/public/Rexford_Tenkorang_CV.pdf"

# ── Colours ──────────────────────────────────────────────────────────────────
GREEN   = colors.HexColor("#00cc70")
DARK    = colors.HexColor("#1a1a1a")
GRAY    = colors.HexColor("#666666")
LGRAY   = colors.HexColor("#f4f4f4")
WHITE   = colors.white

# ── Page geometry ─────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
LEFT = RIGHT = 18 * mm
TOP  = BOTTOM = 14 * mm

# ── Styles ───────────────────────────────────────────────────────────────────
def make_styles():
    name_style = ParagraphStyle(
        "Name",
        fontName="Helvetica-Bold",
        fontSize=26,
        textColor=GREEN,
        spaceAfter=2,
        leading=30,
        alignment=TA_LEFT,
    )
    contact_style = ParagraphStyle(
        "Contact",
        fontName="Helvetica",
        fontSize=8,
        textColor=GRAY,
        spaceAfter=4,
        leading=12,
        alignment=TA_LEFT,
    )
    section_style = ParagraphStyle(
        "Section",
        fontName="Helvetica-Bold",
        fontSize=10.5,
        textColor=GREEN,
        spaceBefore=10,
        spaceAfter=2,
        leading=14,
        alignment=TA_LEFT,
    )
    body_style = ParagraphStyle(
        "Body",
        fontName="Helvetica",
        fontSize=9,
        textColor=DARK,
        spaceAfter=3,
        leading=13,
        alignment=TA_LEFT,
    )
    bullet_style = ParagraphStyle(
        "Bullet",
        fontName="Helvetica",
        fontSize=9,
        textColor=DARK,
        spaceAfter=2,
        leading=13,
        leftIndent=12,
        firstLineIndent=0,
        alignment=TA_LEFT,
        bulletIndent=2,
    )
    proj_title_style = ParagraphStyle(
        "ProjTitle",
        fontName="Helvetica-Bold",
        fontSize=9.5,
        textColor=DARK,
        spaceAfter=1,
        spaceBefore=5,
        leading=13,
    )
    proj_tech_style = ParagraphStyle(
        "ProjTech",
        fontName="Courier",
        fontSize=8,
        textColor=DARK,
        spaceAfter=3,
        leading=11,
        backColor=LGRAY,
    )
    sub_style = ParagraphStyle(
        "Sub",
        fontName="Helvetica",
        fontSize=9,
        textColor=DARK,
        spaceAfter=2,
        leading=13,
    )
    italic_style = ParagraphStyle(
        "Italic",
        fontName="Helvetica-Oblique",
        fontSize=8.5,
        textColor=GRAY,
        spaceAfter=1,
        leading=12,
    )
    return {
        "name": name_style,
        "contact": contact_style,
        "section": section_style,
        "body": body_style,
        "bullet": bullet_style,
        "proj_title": proj_title_style,
        "proj_tech": proj_tech_style,
        "sub": sub_style,
        "italic": italic_style,
    }


def section_rule():
    """Green full-width underline rule under a section heading."""
    return HRFlowable(
        width="100%",
        thickness=1.5,
        color=GREEN,
        spaceAfter=5,
        spaceBefore=0,
    )


def skill_tag(text, styles):
    """Inline monospace tag on light-gray background."""
    return Paragraph(
        f'<font name="Courier" size="8">{text}</font>',
        styles["proj_tech"],
    )


def build_cv():
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=A4,
        leftMargin=LEFT,
        rightMargin=RIGHT,
        topMargin=TOP,
        bottomMargin=BOTTOM,
        title="Rexford Tenkorang – CV",
        author="Rexford Tenkorang",
    )

    styles = make_styles()
    story  = []

    # ── NAME & CONTACT ────────────────────────────────────────────────────────
    story.append(Paragraph("Rexford Tenkorang", styles["name"]))
    contact_line = (
        "Kumasi, Ghana&nbsp;&nbsp;|&nbsp;&nbsp;0246227516&nbsp;&nbsp;|&nbsp;&nbsp;"
        "rexfordtenkorang27@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;"
        "linkedin.com/in/rexford-tenkorang-343737197&nbsp;&nbsp;|&nbsp;&nbsp;"
        "github.com/Rexfauld"
    )
    story.append(Paragraph(contact_line, styles["contact"]))
    story.append(HRFlowable(width="100%", thickness=0.5, color=GRAY, spaceAfter=6))

    # ── CAREER OBJECTIVE ─────────────────────────────────────────────────────
    story.append(Paragraph("CAREER OBJECTIVE", styles["section"]))
    story.append(section_rule())
    story.append(Paragraph(
        "Technical-minded Computer Science student specialising in Python-driven automation, "
        "Linux system administration, and optimised database management. Focused on building "
        "robust backend architectures and ensuring data integrity through disciplined scripting "
        "and environment configuration. Committed to delivering high-performance, scalable "
        "solutions with professional precision and technical honesty.",
        styles["body"],
    ))

    # ── TECHNICAL SKILLS ─────────────────────────────────────────────────────
    story.append(Paragraph("TECHNICAL SKILLS", styles["section"]))
    story.append(section_rule())

    skills_data = [
        ("Languages",  "Python (psutil, psycopg2), SQL, PHP, Java"),
        ("Linux / OS", "Ubuntu, Bash, Cron Automation, venv"),
        ("Databases",  "PostgreSQL, MySQL, MongoDB"),
        ("Tools",      "Git, Nano/Vim, VirtualBox/VMware"),
    ]

    usable_w = PAGE_W - LEFT - RIGHT
    label_w  = 28 * mm
    tag_w    = usable_w - label_w

    table_rows = []
    for label, values in skills_data:
        label_para = Paragraph(
            f'<b>{label}</b>',
            ParagraphStyle("lbl", fontName="Helvetica-Bold", fontSize=9,
                           textColor=DARK, leading=12),
        )
        # Render each comma-separated value as a single tag row
        tag_para = Paragraph(
            f'<font name="Courier" size="8.5">{values}</font>',
            ParagraphStyle("tag", fontName="Courier", fontSize=8.5,
                           textColor=DARK, backColor=LGRAY, leading=12,
                           leftPadding=4, rightPadding=4),
        )
        table_rows.append([label_para, tag_para])

    skill_table = Table(table_rows, colWidths=[label_w, tag_w], hAlign="LEFT")
    skill_table.setStyle(TableStyle([
        ("VALIGN",      (0, 0), (-1, -1), "TOP"),
        ("ROWBACKGROUNDS", (1, 0), (1, -1), [LGRAY]),
        ("LEFTPADDING",  (1, 0), (1, -1), 4),
        ("RIGHTPADDING", (1, 0), (1, -1), 4),
        ("TOPPADDING",   (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 3),
        ("LINEBELOW",    (0, 0), (-1, -2), 0.3, colors.HexColor("#e0e0e0")),
    ]))
    story.append(skill_table)

    # ── PROJECTS ─────────────────────────────────────────────────────────────
    story.append(Paragraph("PROJECTS", styles["section"]))
    story.append(section_rule())

    projects = [
        {
            "title": "System Infrastructure Monitor",
            "tech":  "Python · PostgreSQL · Ubuntu Linux",
            "bullets": [
                "Engineered a Python-based monitoring tool to automate tracking of critical Linux system metrics (CPU, RAM, Disk).",
                "Designed and implemented a PostgreSQL backend to store time-series logs with strict data type integrity.",
                "Automated data collection via Cron Jobs, enabling persistent 24/7 background system monitoring.",
                "Managed project dependencies using Linux virtual environments to maintain host OS stability.",
            ],
        },
        {
            "title": "StudyHub — Full-Stack Educational Platform (In Development)",
            "tech":  "React · Node.js · Express · MongoDB Atlas · Supabase",
            "bullets": [
                "Built a multi-tier educational resource platform serving JHS, SHS, and University students in Ghana.",
                "Deployed a cloud-hosted NoSQL database using MongoDB Atlas for scalable data management.",
                "Implemented cloud-based file storage and retrieval using Supabase Storage.",
                "Designed a RESTful API backend with Node.js/Express consuming multiple cloud services.",
                "Architected a multi-cloud solution integrating two independent cloud platforms in one application.",
            ],
        },
        {
            "title": "Real Data House",
            "tech":  "PHP · MySQL · JavaScript · HTML/CSS",
            "bullets": [
                "Data bundle sales platform with automated fulfilment and transaction management.",
                "Fintech-style user flow for purchasing and managing data bundles.",
            ],
        },
    ]

    for p in projects:
        story.append(Paragraph(f'<b>{p["title"]}</b>', styles["proj_title"]))
        story.append(Paragraph(
            f'<font name="Courier" size="8">{p["tech"]}</font>',
            ParagraphStyle("tech_inline", fontName="Courier", fontSize=8,
                           textColor=GRAY, leading=11, spaceAfter=3),
        ))
        for b in p["bullets"]:
            story.append(Paragraph(f"• {b}", styles["bullet"]))
        story.append(Spacer(1, 3))

    # ── EDUCATION ─────────────────────────────────────────────────────────────
    story.append(Paragraph("EDUCATION", styles["section"]))
    story.append(section_rule())

    edu_entries = [
        {
            "school": "Kumasi Technical University",
            "degree": "BSc. Computer Technology",
            "years":  "2023 – 2027",
            "note":   "Coursework: Data Structures &amp; Algorithms, Database Management Systems, Operating Systems",
        },
        {
            "school": "Kumasi Academy",
            "degree": "Secondary Education",
            "years":  "2019 – 2022",
            "note":   "",
        },
        {
            "school": "Apraman M/A Basic School",
            "degree": "Basic Education",
            "years":  "",
            "note":   "",
        },
    ]

    for e in edu_entries:
        years_txt = f' <font color="#666666">| {e["years"]}</font>' if e["years"] else ""
        story.append(Paragraph(
            f'<b>{e["school"]}</b> — {e["degree"]}{years_txt}',
            styles["sub"],
        ))
        if e["note"]:
            story.append(Paragraph(
                f'<i>{e["note"]}</i>',
                ParagraphStyle("edu_note", fontName="Helvetica-Oblique",
                               fontSize=8, textColor=GRAY, leading=11,
                               spaceAfter=3, leftIndent=10),
            ))
        else:
            story.append(Spacer(1, 2))

    # ── CONFERENCES & EVENTS ─────────────────────────────────────────────────
    story.append(Paragraph("CONFERENCES &amp; EVENTS", styles["section"]))
    story.append(section_rule())

    # Build with AI
    story.append(Paragraph(
        '<b>Build with AI – Kumasi</b> <font color="#666666">| Google Developer Groups &nbsp;·&nbsp; May 2026 &nbsp;·&nbsp; Kumasi Technical University</font>',
        styles["sub"],
    ))
    conf_sessions = [
        "Building and Customizing Your First AI Agent with Google's ADK — Umar Faruq Zubairu (GDE | CEO, Ummatore)",
        "Building Multiagent Systems — Gbemisola Esho (GDE | CEO, Connectbridge)",
        "Build a Stateful AI Assistant with Firebase AI Logic and Firestore — Auwal MS (GDE | Developer Rel, Moniepoint Inc)",
    ]
    for s in conf_sessions:
        story.append(Paragraph(f"• {s}", styles["bullet"]))
    story.append(Spacer(1, 4))

    # Other conferences
    other_confs = [
        ("<b>Google DevFest</b>", "Learned about modern web technologies, cloud solutions, and app development trends."),
        ("<b>Kumasi Connect</b>", "Attended sessions on entrepreneurship, tech innovation, and networking with local tech leaders."),
        ("<b>Barcamp, HapaWeb, Hapaspace, Komseko</b>", "Participated in unconferences emphasising hands-on workshops, peer-to-peer learning, and community-driven tech discussions."),
    ]
    for title, desc in other_confs:
        story.append(Paragraph(
            f"{title} — {desc}",
            ParagraphStyle("conf", fontName="Helvetica", fontSize=9,
                           textColor=DARK, leading=13, spaceAfter=3),
        ))

    # ── LANGUAGES & HOBBIES ───────────────────────────────────────────────────
    story.append(Paragraph("ADDITIONAL", styles["section"]))
    story.append(section_rule())
    story.append(Paragraph(
        "<b>Languages:</b> English, Twi&nbsp;&nbsp;&nbsp;&nbsp;<b>Hobbies:</b> Football, Reading",
        styles["body"],
    ))

    # ── BUILD ─────────────────────────────────────────────────────────────────
    doc.build(story)
    print(f"PDF saved to: {OUTPUT_PATH}")
    size = os.path.getsize(OUTPUT_PATH)
    print(f"File size: {size:,} bytes ({size/1024:.1f} KB)")


if __name__ == "__main__":
    build_cv()
