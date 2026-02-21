#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 2400
OUT_DIR = Path("/Users/huismyoo/Desktop/new/kakao-practice-offline/public/assets/mock-screens")


def load_font(size: int):
    candidates = [
        "/System/Library/Fonts/AppleSDGothicNeo.ttc",
        "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


FONT_26 = load_font(26)
FONT_30 = load_font(30)
FONT_34 = load_font(34)
FONT_38 = load_font(38)
FONT_44 = load_font(44)
FONT_54 = load_font(54)


def base_screen(chat_title: str):
    im = Image.new("RGB", (W, H), "#eef1f7")
    d = ImageDraw.Draw(im)

    d.rectangle((0, 0, W, 80), fill="#d9dce2")
    d.text((45, 22), "7:39", fill="#4c4f57", font=FONT_30)
    d.text((W - 180, 22), "LTE", fill="#4c4f57", font=FONT_30)

    d.rectangle((0, 80, W, 220), fill="#f6e24c")
    d.text((44, 120), "<", fill="#303030", font=FONT_54)
    d.text((128, 122), chat_title, fill="#222222", font=FONT_38)
    d.text((W - 95, 122), "⋮", fill="#333333", font=FONT_54)

    d.rectangle((0, 220, W, H - 220), fill="#c5d4e5")
    return im, d


def draw_chat_bubbles(d):
    d.rounded_rectangle((52, 330, 630, 450), radius=26, fill="#ffffff")
    d.text((90, 370), "오늘 사진 보내줘요", fill="#222", font=FONT_34)
    d.rounded_rectangle((450, 520, 1028, 700), radius=26, fill="#f9e24e")
    d.text((500, 580), "네, 바로 보낼게요", fill="#222", font=FONT_34)


def draw_input_bar(d, highlight: str = ""):
    top = H - 220
    d.rectangle((0, top, W, H), fill="#ffffff")
    d.line((0, top, W, top), fill="#d9dce2", width=2)

    plus_box = (28, top + 44, 112, top + 128)
    d.rounded_rectangle(plus_box, radius=20, fill="#f2f3f7", outline="#cfd2db", width=2)
    d.text((56, top + 58), "+", fill="#4b4f58", font=FONT_44)

    input_box = (130, top + 36, 860, top + 136)
    d.rounded_rectangle(input_box, radius=32, fill="#f6f7fb", outline="#dbdfea", width=2)
    d.text((168, top + 68), "메시지를 입력하세요", fill="#9aa1ae", font=FONT_30)

    send_box = (882, top + 38, 1052, top + 136)
    d.rounded_rectangle(send_box, radius=28, fill="#ffe33d")
    d.text((935, top + 66), "↑", fill="#202020", font=FONT_44)

    if highlight == "plus":
        d.ellipse((18, top + 34, 122, top + 138), outline="#ff3b30", width=8)
    if highlight == "send":
        d.ellipse((872, top + 28, 1062, top + 146), outline="#ff3b30", width=8)
    if highlight == "more":
        d.ellipse((W - 112, 108, W - 26, 192), outline="#ff3b30", width=8)


def draw_gallery_sheet(d, selected: int):
    sheet_top = H - 920
    d.rounded_rectangle((0, sheet_top, W, H), radius=30, fill="#ffffff")
    d.rounded_rectangle((470, sheet_top + 16, 610, sheet_top + 28), radius=8, fill="#cfd3db")
    d.text((42, sheet_top + 54), "사진", fill="#1f2430", font=FONT_38)
    d.text((130, sheet_top + 54), "최근 항목", fill="#667086", font=FONT_30)

    x0, y0 = 42, sheet_top + 120
    idx = 1
    for row in range(2):
        for col in range(4):
            x = x0 + col * 250
            y = y0 + row * 240
            d.rounded_rectangle((x, y, x + 220, y + 200), radius=18, fill="#d8dfec")
            if idx <= selected:
                d.ellipse((x + 164, y + 12, x + 208, y + 56), fill="#4c68ff")
                d.text((x + 178, y + 20), str(idx), fill="#fff", font=FONT_26)
            idx += 1


def draw_video_thumbs(d, selected: int):
    sheet_top = H - 920
    d.rounded_rectangle((0, sheet_top, W, H), radius=30, fill="#ffffff")
    d.text((42, sheet_top + 54), "사진", fill="#1f2430", font=FONT_38)
    d.text((130, sheet_top + 54), "동영상 포함", fill="#667086", font=FONT_30)

    x0, y0 = 42, sheet_top + 120
    idx = 1
    for row in range(2):
        for col in range(4):
            x = x0 + col * 250
            y = y0 + row * 240
            d.rounded_rectangle((x, y, x + 220, y + 200), radius=18, fill="#314154")
            d.polygon([(x + 92, y + 70), (x + 92, y + 130), (x + 145, y + 100)], fill="#ffffff")
            if idx <= selected:
                d.ellipse((x + 164, y + 12, x + 208, y + 56), fill="#ff4b7a")
                d.text((x + 178, y + 20), str(idx), fill="#fff", font=FONT_26)
            idx += 1


def draw_received_photo(d, count: int):
    x, y = 70, 820
    if count == 1:
        d.rounded_rectangle((x, y, x + 460, y + 350), radius=24, fill="#e0e7f3")
        d.text((x + 130, y + 150), "사진 1장", fill="#2e3f62", font=FONT_38)
    else:
        for i in range(3):
            dx = i * 160
            d.rounded_rectangle((x + dx, y, x + dx + 150, y + 150), radius=18, fill="#e0e7f3")
        d.text((x + 12, y + 190), "사진 묶음(여러 장)", fill="#2e3f62", font=FONT_38)


def draw_received_video(d, count: int):
    x, y = 70, 820
    if count == 1:
        d.rounded_rectangle((x, y, x + 460, y + 260), radius=24, fill="#2f4052")
        d.polygon([(x + 180, y + 90), (x + 180, y + 170), (x + 260, y + 130)], fill="#ffffff")
        d.text((x + 130, y + 295), "동영상 1개", fill="#2e3f62", font=FONT_38)
    else:
        for i in range(3):
            dx = i * 160
            d.rounded_rectangle((x + dx, y, x + dx + 150, y + 130), radius=18, fill="#2f4052")
            d.polygon([(x + dx + 58, y + 45), (x + dx + 58, y + 85), (x + dx + 98, y + 65)], fill="#fff")
        d.text((x + 10, y + 175), "동영상 묶음(여러 개)", fill="#2e3f62", font=FONT_38)


def add_step_label(d, text: str):
    d.rounded_rectangle((52, 250, 1028, 308), radius=20, fill="#1f2430")
    d.text((80, 266), text, fill="#ffffff", font=FONT_30)


def save(name: str, im: Image.Image):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    im.save(OUT_DIR / name, "PNG")


def build_photo_send_single():
    im, d = base_screen("가족 단톡방")
    draw_chat_bubbles(d)
    draw_input_bar(d, highlight="plus")
    draw_gallery_sheet(d, selected=1)
    add_step_label(d, "이번 단계: + 버튼 > 사진 > 1장 선택 > 전송")
    save("photo-send-single.png", im)


def build_photo_send_multi():
    im, d = base_screen("가족 단톡방")
    draw_chat_bubbles(d)
    draw_input_bar(d, highlight="send")
    draw_gallery_sheet(d, selected=3)
    add_step_label(d, "이번 단계: 사진 여러 장 선택 후 전송")
    save("photo-send-multi.png", im)


def build_photo_receive_single():
    im, d = base_screen("엄마")
    draw_chat_bubbles(d)
    draw_received_photo(d, count=1)
    draw_input_bar(d, highlight="more")
    add_step_label(d, "이번 단계: 사진 열기 > 더보기(⋮) > 저장하기")
    save("photo-receive-single.png", im)


def build_photo_receive_multi():
    im, d = base_screen("친구")
    draw_chat_bubbles(d)
    draw_received_photo(d, count=3)
    draw_input_bar(d, highlight="more")
    add_step_label(d, "이번 단계: 사진 묶음 열기 > 더보기(⋮) > 전체 저장")
    save("photo-receive-multi.png", im)


def build_video_send_single():
    im, d = base_screen("친구")
    draw_chat_bubbles(d)
    draw_input_bar(d, highlight="plus")
    draw_video_thumbs(d, selected=1)
    add_step_label(d, "이번 단계: + 버튼 > 사진 > 동영상 1개 전송")
    save("video-send-single.png", im)


def build_video_send_multi():
    im, d = base_screen("친구")
    draw_chat_bubbles(d)
    draw_input_bar(d, highlight="send")
    draw_video_thumbs(d, selected=2)
    add_step_label(d, "이번 단계: 동영상 여러 개 선택 후 전송")
    save("video-send-multi.png", im)


def build_video_receive_single():
    im, d = base_screen("동호회")
    draw_chat_bubbles(d)
    draw_received_video(d, count=1)
    draw_input_bar(d, highlight="more")
    add_step_label(d, "이번 단계: 동영상 열기 > 더보기(⋮) > 저장하기")
    save("video-receive-single.png", im)


def build_video_receive_multi():
    im, d = base_screen("동호회")
    draw_chat_bubbles(d)
    draw_received_video(d, count=3)
    draw_input_bar(d, highlight="more")
    add_step_label(d, "이번 단계: 동영상 묶음 > 더보기(⋮) > 전체 저장")
    save("video-receive-multi.png", im)


def main():
    build_photo_send_single()
    build_photo_send_multi()
    build_photo_receive_single()
    build_photo_receive_multi()
    build_video_send_single()
    build_video_send_multi()
    build_video_receive_single()
    build_video_receive_multi()
    print("Generated 8 kakao-style mock images.")


if __name__ == "__main__":
    main()
