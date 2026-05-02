from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"


def style_sheet():
    base = getSampleStyleSheet()
    navy = colors.HexColor("#17324D")
    muted = colors.HexColor("#4B5563")
    orange = colors.HexColor("#B45309")

    styles = {
        "name": ParagraphStyle(
            "name",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=navy,
            spaceAfter=3,
        ),
        "role": ParagraphStyle(
            "role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=14,
            textColor=orange,
            spaceAfter=8,
        ),
        "contact": ParagraphStyle(
            "contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.7,
            leading=12,
            textColor=muted,
            spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11.2,
            leading=14,
            textColor=navy,
            spaceBefore=8,
            spaceAfter=4,
            uppercase=True,
        ),
        "subhead": ParagraphStyle(
            "subhead",
            parent=base["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=13,
            textColor=colors.HexColor("#111827"),
            spaceBefore=5,
            spaceAfter=2,
        ),
        "meta": ParagraphStyle(
            "meta",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.8,
            leading=11,
            textColor=muted,
            spaceAfter=3,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.4,
            textColor=colors.HexColor("#111827"),
            alignment=TA_LEFT,
            spaceAfter=4,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.0,
            leading=12,
            leftIndent=0,
            textColor=colors.HexColor("#111827"),
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11.5,
            textColor=colors.HexColor("#111827"),
            spaceAfter=3,
        ),
    }
    return styles, navy


def p(text, style):
    return Paragraph(text.replace("&", "&amp;"), style)


def bullets(items, style):
    story = []
    for item in items:
        story.append(p(f"- {item}", style))
    story.append(Spacer(1, 2))
    return story


def section(story, title, styles, navy):
    story.append(Spacer(1, 3))
    story.append(p(title.upper(), styles["section"]))
    story.append(HRFlowable(width="100%", thickness=0.8, color=navy, spaceBefore=1, spaceAfter=5))


def build_pdf():
    styles, navy = style_sheet()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=13 * mm,
        bottomMargin=13 * mm,
        title="Balvir Kainth CV",
        author="Balvir Kainth",
        subject="Full Stack Web Developer CV",
    )

    story = []
    story.append(p("Balvir Kainth", styles["name"]))
    story.append(p("Full Stack Web Developer | Laravel | React | WordPress | WooCommerce", styles["role"]))
    story.append(
        p(
            "Mohali, Punjab, India | +91 98098-66200 | rajeevkainth01@gmail.com<br/>"
            "GitHub: https://github.com/Balvir6200 | LinkedIn: https://www.linkedin.com/in/balvir-kainth/ | Portfolio: https://melodious-nasturtium-d643ce.netlify.app/",
            styles["contact"],
        )
    )

    section(story, "Professional Profile", styles, navy)
    story.append(
        p(
            "Full Stack Web Developer with agency experience building business websites, admin dashboards, SaaS-style systems and database-driven applications. Experienced in Laravel MVC, React, Tailwind CSS, WordPress custom themes, ACF Pro, WooCommerce, REST APIs, SQL databases, SEO optimisation, responsive design, hosting and domain management. Delivered live websites across healthcare, finance, printing, travel, wellness, fitness, agriculture and international business domains.",
            styles["body"],
        )
    )

    section(story, "Core Technical Skills", styles, navy)
    story.append(
        p(
            "<b>Languages & Frameworks:</b> PHP, Laravel MVC, React JS, JavaScript, jQuery, HTML5, CSS3, Tailwind CSS.<br/>"
            "<b>CMS & Ecommerce:</b> WordPress custom themes, child themes, custom plugins, ACF Pro, WooCommerce setup and customisation.<br/>"
            "<b>Databases:</b> MySQL, SQLite, PostgreSQL, SQL queries, normalisation, backup/restore, user permissions.<br/>"
            "<b>Delivery:</b> REST APIs, responsive design, cross-browser compatibility, SEO, performance optimisation, caching, minification, image optimisation, cPanel, FTP, DNS, Git, GitHub.",
            styles["small"],
        )
    )

    section(story, "Certifications", styles, navy)
    story.append(p("Fundamentals of Artificial Intelligence", styles["subhead"]))
    story.append(p("Wadhwani Foundation | Certificate of Completion - Basic | May 01, 2026 | 7.5 hours", styles["meta"]))
    story.extend(
        bullets(
            [
                "Completed AI fundamentals training covering basic concepts and applied learning.",
                "Continuing to build a certification portfolio across AI, full-stack development, databases, cloud hosting and product engineering.",
            ],
            styles["bullet"],
        )
    )

    section(story, "Professional Experience", styles, navy)
    story.append(p("WordPress and Web Developer", styles["subhead"]))
    story.append(p("Kodegurus Pvt. Ltd. | 2021 - 2024", styles["meta"]))
    story.extend(
        bullets(
            [
                "Built and maintained responsive business websites using WordPress, HTML5, CSS3, JavaScript, jQuery and PHP.",
                "Developed custom WordPress themes, child themes and flexible content sections using Advanced Custom Fields.",
                "Worked on WooCommerce setup and customisation for business and ecommerce requirements.",
                "Improved website performance with caching, minification, image optimisation and responsive front-end practices.",
                "Supported SEO implementation, mobile-first layouts, cross-browser compatibility and production website updates.",
                "Managed hosting-related tasks including cPanel, FTP, domains, DNS setup and deployment support.",
            ],
            styles["bullet"],
        )
    )
    story.append(
        p(
            "<b>Representative live work:</b> kodegurus.com, printerstechy.com, 800creditnow.com, credencemedicure.com, portal.credencemedicure.com, drharishsharma.com, dietitianshreya.com, fitnessloungegym.com, maximweigh.com, dawnfinancial.in, bajajtravel.com, farmdirect.org.in, xibiti.com, unimartinternational.com, chefscorner.hu.",
            styles["small"],
        )
    )

    section(story, "Selected Projects", styles, navy)
    projects = [
        (
            "DripBloc Pro - Premium Printing SaaS",
            "https://github.com/Balvir6200/dripbloc",
            [
                "Built a premium multi-category printing platform using Laravel MVC, React, Tailwind CSS and REST-style application structure.",
                "Designed category-first architecture for print products, subcategories, sizes, templates and design specifications.",
                "Created admin-side modules for category management, product configuration and print workflow control.",
            ],
        ),
        (
            "Reader's Realm Library Management System",
            "https://github.com/Balvir6200/readers-realm-library-management",
            [
                "Built a full-stack library management system using Laravel MVC, React, Tailwind CSS and SQLite/MySQL.",
                "Implemented student management, subscription plans, payment tracking, auto-expiry and PDF receipt generation.",
                "Created a premium admin dashboard for library operations and membership status visibility.",
            ],
        ),
        (
            "Food Admin Dashboard",
            "https://github.com/Balvir6200/laravel-react-food-admin-dashboard",
            [
                "Built a Swiggy-style restaurant admin dashboard using Laravel and React.",
                "Developed operational views for orders, customers, payments and order status updates.",
            ],
        ),
        (
            "Lab SaaS System",
            "",
            [
                "Developed SaaS-style diagnostic laboratory workflows including subscriptions, patient dashboard concepts and report handling.",
                "Focused on multi-tenant structure, billing logic, dashboard usability and database-driven operations.",
            ],
        ),
    ]

    for title, link, items in projects:
        story.append(p(title, styles["subhead"]))
        if link:
            story.append(p(f"GitHub: {link}", styles["meta"]))
        story.extend(bullets(items, styles["bullet"]))

    section(story, "Database Experience", styles, navy)
    story.extend(
        bullets(
            [
                "Designed and maintained PostgreSQL databases using PgAdmin.",
                "Created 10+ normalised tables following 1NF, 2NF and 3NF principles.",
                "Wrote SQL queries for data retrieval and reporting.",
                "Managed user permissions and performed backup and restore operations.",
            ],
            styles["bullet"],
        )
    )

    section(story, "Education", styles, navy)
    story.append(p("<b>Bachelor of Technology</b> | Punjab Technical University | 2013 - 2016 | Score: 80.66%", styles["body"]))
    story.append(p("<b>Diploma in Computer Science Engineering</b> | Chandigarh Technical Board | 2010 - 2013", styles["body"]))

    section(story, "Languages", styles, navy)
    story.append(p("English: Fluent | Hindi: Fluent | Punjabi: Fluent", styles["body"]))

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
