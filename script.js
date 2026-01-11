function setLang(lang) {
    if (lang === "bn") {
        document.getElementById("obj_title").innerText = "ক্যারিয়ার লক্ষ্য";
        document.getElementById("objective").innerText =
            "একজন উদ্যমী ও আগ্রহী ফ্রেশার হিসেবে আমি একটি গতিশীল কর্মপরিবেশে আমার দক্ষতা প্রয়োগ করতে চাই।";

        document.getElementById("skill_title").innerText = "দক্ষতা";
        document.getElementById("s1").innerText = "যোগাযোগ দক্ষতা";
        document.getElementById("s2").innerText = "দলগত কাজ";
        document.getElementById("s3").innerText = "নেতৃত্ব";
        document.getElementById("s4").innerText = "এমএস অফিস";

        document.getElementById("edu_title").innerText = "শিক্ষাগত যোগ্যতা";
        document.getElementById("edu_text").innerText =
            "বি.এসসি ইন সিএসই – ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি (২০২৪)";
    }

    if (lang === "en") {
        document.getElementById("obj_title").innerText = "Career Objective";
        document.getElementById("objective").innerText =
            "Dedicated and enthusiastic fresher eager to apply skills in a dynamic work environment.";

        document.getElementById("skill_title").innerText = "Skills";
        document.getElementById("s1").innerText = "Communication";
        document.getElementById("s2").innerText = "Teamwork";
        document.getElementById("s3").innerText = "Leadership";
        document.getElementById("s4").innerText = "MS Office";

        document.getElementById("edu_title").innerText = "Education";
        document.getElementById("edu_text").innerText =
            "BSc in CSE – Daffodil International University (2024)";
    }
}
