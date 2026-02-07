const bioTemplates = [
  (skills) => `👋 سلام! من یک ${skills} هستم. عاشق چالش‌های جدیدم و همیشه به دنبال یادگیری بیشتر. بیایید با هم پروژه‌های عالی بسازیم! 🚀`,
  (skills) => `🎯 ${skills} با تجربه‌ی چندین ساله. تخصص من در تحویل به‌موقع و باکیفیت پروژه‌هاست. مشتری مداری اولویت منه! 💪`,
  (skills) => `✨ ${skills} | متعهد به کیفیت و جزئیات. هر پروژه رو مثل پروژه‌ی خودم انجام میدم. آماده‌ی همکاری حرفه‌ای! 🤝`
];

function generateBio() {
  const skills = document.getElementById('skills').value.trim();
  if (!skills) {
    alert('لطفاً مهارت‌های خود را وارد کنید!');
    return;
  }
  
  const randomTemplate = bioTemplates[Math.floor(Math.random() * bioTemplates.length)];
  document.getElementById('bioText').textContent = randomTemplate(skills);
  document.getElementById('result').classList.add('show');
}

function copyBio() {
  const bioText = document.getElementById('bioText').textContent;
  navigator.clipboard.writeText(bioText).then(() => {
    alert('بیو کپی شد! ✅');
  });
}
