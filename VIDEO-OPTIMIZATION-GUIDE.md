# Video Optimization Guide for Rowe Environmental

Your drone-montage.MOV video needs optimization to look crisp and professional on the web.

## Changes Made to CSS

✅ **Reduced overlay opacity** from 85%/75% → 45%/35% (much lighter)
✅ **Added video filters** for contrast (1.1) and brightness (1.05)
✅ **Enhanced text shadows** for better readability
✅ **Improved text contrast** against lighter background

## Why the Video Looks Blurry

The original `drone-montage.MOV` is likely:
- Low resolution or compressed
- Shot at low bitrate
- Using variable frame rate
- Contains camera shake/motion blur

## Solution: Re-export the Video

### Best Option: Use FFmpeg (High Quality)

```bash
# Install FFmpeg
brew install ffmpeg

# HIGH QUALITY VERSION (Recommended)
ffmpeg -i drone-montage.MOV \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -vf "scale=1920:1080:flags=lanczos,unsharp=5:5:1.0:5:5:0.0" \
  -r 30 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  drone-montage-hq.mp4
```

**Explanation:**
- `crf 18` = Very high quality (lower = better, 18-23 is excellent)
- `scale=1920:1080` = Full HD resolution
- `unsharp=5:5:1.0` = Adds slight sharpening for clarity
- `flags=lanczos` = Best scaling algorithm
- `-r 30` = Consistent 30fps
- `-an` = Remove audio (not needed for background video)
- `faststart` = Optimizes for web streaming

### Medium Quality (Smaller File)

```bash
ffmpeg -i drone-montage.MOV \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -vf "scale=1920:1080:flags=lanczos,unsharp=5:5:0.8:5:5:0.0" \
  -r 30 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  drone-montage-web.mp4
```

### For Mobile (Smaller, Faster Loading)

```bash
ffmpeg -i drone-montage.MOV \
  -c:v libx264 \
  -preset slow \
  -crf 25 \
  -vf "scale=1280:720:flags=lanczos" \
  -r 30 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  drone-montage-mobile.mp4
```

## Alternative: Adobe Premiere / Final Cut Pro

### Adobe Premiere Pro Export Settings:
```
Format: H.264
Preset: YouTube 1080p HD
Target Bitrate: 10 Mbps
Maximum Bitrate: 12 Mbps
Frame Rate: 30 fps
Resolution: 1920x1080
Profile: High
Level: 4.2
```

### Final Cut Pro Export Settings:
```
Format: H.264
Resolution: 1920x1080
Quality: Better Quality
Data Rate: 10,000 kbps
Frame Rate: 30fps
Field Order: Progressive
```

## Alternative: HandBrake (Free GUI Tool)

1. Download: https://handbrake.fr/
2. Open `drone-montage.MOV`
3. **Settings:**
   - **Preset:** "Production Standard"
   - **Format:** MP4
   - **Video Codec:** H.264 (x264)
   - **Quality:** Constant Quality RF 20-22
   - **Framerate:** 30 FPS Constant
   - **Resolution:** 1920x1080
4. **Filters Tab:**
   - Sharpen: Unsharp (Strength: 0.25, Threshold: 0.05)
5. Click **Start Encode**

## If You Don't Have the Original High-Res Footage

If the current MOV is already compressed and you don't have the original:

### Option 1: Upscale with AI (Best Results)
Use **Topaz Video AI** (paid but worth it):
- https://www.topazlabs.com/topaz-video-ai
- Can upscale to 4K and remove blur
- Apply stabilization and sharpening

### Option 2: Online AI Upscaling (Free Trial)
- **Clideo Video Enhancer:** https://clideo.com/video-enhancer
- **Veed.io:** https://www.veed.io/tools/video-quality-enhancer

### Option 3: Use Different Footage
Consider re-shooting with:
- Higher bitrate settings on drone
- 4K resolution
- Stabilization enabled
- Good lighting conditions

## After Optimization

### Update HTML to use optimized video:

```html
<video autoplay muted loop playsinline id="heroVideo">
    <source src="drone-montage-hq.mp4" type="video/mp4">
    <source src="drone-montage-mobile.mp4" type="video/mp4" media="(max-width: 768px)">
</video>
```

### Test File Size:
- Target: 2-5 MB for good quality
- Maximum: 10 MB (will be slower to load)
- Under 2 MB: May lose too much quality

## Quick CSS Adjustments

If video is still too dark, edit `styles.css`:

```css
/* Make overlay even lighter */
.video-overlay {
    background: linear-gradient(135deg, rgba(56, 99, 96, 0.30) 0%, rgba(95, 128, 84, 0.25) 100%);
}

/* Add more sharpness */
.video-background video {
    filter: contrast(1.15) brightness(1.1) saturate(1.05);
}
```

## Testing Checklist

- [ ] Video loads within 3 seconds
- [ ] Video is sharp and clear
- [ ] Text is readable over video
- [ ] Colors look vibrant
- [ ] Works on mobile devices
- [ ] File size under 5 MB
- [ ] No stuttering/lag during playback

## Pro Tips

1. **Shoot in 4K** even if displaying at 1080p (gives sharper result when downscaled)
2. **Use manual exposure** to avoid flickering
3. **Shoot at 30fps or 60fps** for smooth motion
4. **Avoid quick pans** that can cause motion blur
5. **Golden hour lighting** (sunrise/sunset) looks best
6. **Use ND filters** on drone to prevent overexposure

---

**Current Status:**
- Overlay reduced to 45%/35% opacity ✓
- Video enhanced with contrast/brightness filters ✓
- Text shadows added for readability ✓

**Next:** Re-encode the video using one of the methods above for best results.
