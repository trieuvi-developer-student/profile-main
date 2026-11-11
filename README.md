# profile-main

## Music Player
- Mở tab **Tiện ích** và chọn **Music Player**.
- Upload file MP3 vào `assets/music/`.
- Mở `assets/js/data.js`, chỉnh mảng `musicTracks` theo mẫu có sẵn (đường dẫn tương đối từ thư mục gốc website).
- Có thể thêm `cover: 'assets/music/cover.jpg'` để dùng ảnh bìa cho từng bài.
- Trình phát có Play/Pause, bài trước/sau, tua, âm lượng, shuffle và repeat. Trình duyệt không tự phát nhạc khi chưa có thao tác của người dùng.
- Trên desktop, Music Player mở cạnh profile; trên điện thoại, nó hiển thị toàn màn hình và có nút quay lại.


## Cloudinary music playlist

The DORI AUDIO playlist is configured with the five Cloudinary delivery URLs supplied by the site owner, in the exact order provided. Three sources are MP3 and two are MP4 containers. The HTML audio element will play the audio track from the MP4 files when their audio codec is supported by the visitor's browser. If an MP4 contains no audio track or uses an unsupported codec, re-upload/convert it to MP3 or M4A in Cloudinary.
