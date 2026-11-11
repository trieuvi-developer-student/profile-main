/**
 * assets/js/data.js
 * Toàn bộ nội dung website nằm ở đây. Muốn đổi tên, số tài khoản, link
 * mạng xã hội... chỉ cần sửa file này, KHÔNG cần đụng tới HTML/CSS/component.
 */

export const profile = {
  name: 'Lương Minh Triệu Vĩ',
  username: '@dori',
  domain: 'trieuvidev.com',
  bio: 'Không gian cá nhân cho nội dung, tiện ích và kết nối cộng đồng.',
  verified: true,
  views: 2922,

  // Chỉ cần thay file trong các thư mục uploads/ tương ứng, không cần sửa code.
  avatar: 'uploads/avatar/avatar.jpg',
  cover: 'uploads/cover/cover.jpg',
  logo: 'uploads/logo/logo.png',

  phone: '0374442806',
};

export const social = {
  quickLinks: [
    { id: 'facebook', name: 'Facebook', icon: 'assets/images/social/facebook.svg', url: 'https://www.facebook.com/share/14j28kBeKGK/' },
    { id: 'discord', name: 'Discord Server', icon: 'assets/images/social/discord.svg', likes: 0, follows: 0, url: 'https://discord.gg/AZfXMays4' },
    { id: 'mail', name: 'Mail', icon: 'assets/images/social/mail.svg', url: 'mailto:trieuvidev' },
  ],

  platforms: [
    { id: 'tiktok', name: 'Tiktok', icon: 'assets/images/social/tiktok.svg', likes: 0, follows: 18.208, url: 'https://vt.tiktok.com/ZSXmRMEA6/' },
    { id: 'facebook', name: 'Facebook', icon: 'assets/images/social/facebook.svg', likes: 0, follows: 12.339, url: 'https://www.facebook.com/share/14j28kBeKGK/' },
    { id: 'discord', name: 'Discord Server', icon: 'assets/images/social/discord.svg', likes: 0, follows: 0, url: 'https://discord.gg/AZfXMays4' },
    { id: 'telegram', name: 'Telegram', icon: 'assets/images/social/telegram.svg', likes: 0, follows: 0, url: 'trieuvi1810dev' },
    { id: 'wechat', name: 'Wechat', icon: 'assets/images/social/wechat.svg', likes: 0, follows: 0, url: '0374442806' },
  ],
};

export const payment = {
  transferContent: 'Donate Dori',

  banks: [
    {
      id: 'techcombank',
      name: 'Techcombank',
      logo: 'assets/images/banks/techcombank.svg',
      holder: 'LUONG MINH TRIEU VI',
      accountLabel: 'Số tài khoản',
      account: '65999956789',
      qr: 'uploads/qrcode/techcombank.png',
      transferUrl: '',
    },
    {
      id: 'vietcombank',
      name: 'Vietcombank',
      logo: 'assets/images/banks/vietcombank.svg',
      holder: 'LUONG MINH TRIEU VI',
      accountLabel: 'Số tài khoản',
      account: '9984771687',
      qr: 'uploads/qrcode/vietcombank.png',
      transferUrl: '',
    },
    {
      id: 'zalopay',
      name: 'ZaloPay',
      logo: 'assets/images/banks/zalopay.svg',
      holder: 'LUONG MINH TRIEU VI',
      accountLabel: 'Số điện thoại',
      account: '0984771687',
      qr: 'uploads/qrcode/zalopay.png',
      transferUrl: '',
    },
  ],
};

// Tiện ích hiển thị trong tab Tiện ích.
export const utilities = [];

// Danh sách nhạc: upload MP3 vào assets/music/ rồi khai báo tại đây.
// Ví dụ: { title: 'Tên bài hát', artist: 'Nghệ sĩ', src: 'assets/music/ten-bai-hat.mp3', cover: 'assets/music/cover.jpg' }
export const musicTracks = [
  {
    title: 'Young Dori 03',
    artist: 'Dori',
    src: 'https://res.cloudinary.com/cnilcn1p/video/upload/v1794414367/youngdoridasick3_aujqlp.mp3',
    cover: 'assets/music/cover.jpg'
  },
  {
    title: 'Young Dori 05',
    artist: 'Dori',
    src: 'https://res.cloudinary.com/cnilcn1p/video/upload/v1794414368/youngdoridasick5_xtyq30.mp3',
    cover: 'assets/music/cover.jpg'
  },
  {
    title: 'Young Dori 04',
    artist: 'Dori',
    src: 'https://res.cloudinary.com/cnilcn1p/video/upload/v1794414390/youngdoridasick4_y2vgnb.mp3',
    cover: 'assets/music/cover.jpg'
  },
  {
    title: 'Cho Em Gần Anh Thêm Chút Nữa (Remix)',
    artist: 'Dori',
    src: 'https://res.cloudinary.com/cnilcn1p/video/upload/v1794414412/Cho_Em_Ga%CC%82%CC%80n_Anh_The%CC%82m_Chu%CC%81t_Nu%CC%9B%CC%83a_Remix.-594816253_cvybjg.mp3_Remix.-594816253_cvybjg.mp4',
    cover: 'assets/music/cover.jpg'
  },
  {
    title: 'Young Dori',
    artist: 'Dori',
    src: 'https://res.cloudinary.com/cnilcn1p/video/upload/v1794414481/youngdoridasick_kfzxlb.mp3',
    cover: 'assets/music/cover.jpg'
  }
];

export const posts = [];

// Bài báo / bài viết truyền thông nhắc đến Dori
export const press = {
  source: 'Thanh Niên Gen Z',
  title: 'Lương Minh Triệu Vĩ - BÁO CÁ NHÂN',
  url: 'https://www.thanhniengenz.com/2025/10/luong-minh-trieu-vi-chang-trai-tphcm-va-hanh-trinh-tu-mang-xa-hoi-den-thiet-ke-website.html?m=1',
};
