# 👨‍🏫 Teacher Guide - Honor Your Life Poster

## Overview

The Honor Your Life Poster platform is a digital tool that allows students to create personalized posters celebrating their identity, goals, and strengths. This guide explains how to implement and use the platform in your classroom or advisory.

## Setup

1. **Download all files** from the GitHub repository
2. **Place files in a folder** on your school server or share them with students
3. **Share the link** to `index.html` with your students
4. **Students can access** it through a web browser (no login needed)

## How It Works

- **Form-Based**: Students fill out a simple form with their information
- **Auto-Generated**: Posters are automatically created from the form data
- **Stored Locally**: Posters are saved in the student's browser (secure, private)
- **Editable**: Advanced students can edit HTML/CSS code to customize posters
- **Gallery View**: All posters are viewable in a shared gallery

## Implementing in Your Class

### Timeline

**Week 1: Introduction**
- Show students the platform
- Discuss what to include in their posters
- Have them start filling out the form

**Week 2: Creation**
- Students create their posters
- Provide feedback and encouragement
- Discuss customization options

**Week 3: Gallery & Celebration**
- View all posters in the gallery
- Discuss classmates' posters (with respect)
- Print and display posters if desired

### Discussion Prompts

- What does "honoring your life" mean to you?
- How do your goals reflect your values?
- What strengths do you see in yourself?
- How are your tribe/culture reflected in your poster?
- What surprised you about your classmates' posters?

## Tips for Success

✅ **Model It First**: Create your own poster to show students
✅ **Normalize Reflection**: Help students think deeply about their goals
✅ **Emphasize Respect**: Frame feedback as honoring classmates
✅ **Celebrate Diversity**: Highlight different paths and perspectives
✅ **Archive Posters**: Have students download HTML files to keep
✅ **Optional Sharing**: Some students may prefer privacy - respect that

## Managing Posters

### Storage
- Posters are stored in browser's **local storage**
- Data persists as long as browser history isn't cleared
- Encourage students to **download** their poster as an HTML file for backup

### Printing
- Posters can be printed directly from the browser
- Use **File > Print** or Ctrl+P
- Recommended: Print on 11x17 cardstock for display

### Sharing
- Students can **download** as HTML files to share
- Encourage responsible sharing (student privacy)
- Consider creating a class gallery display

## Technical Details

### Browser Compatibility
- Works on Chrome, Firefox, Safari, Edge
- Works on mobile browsers
- Requires JavaScript enabled
- No internet required (once loaded)

### Local Storage
- Each student's browser stores their own data
- Using private/incognito mode won't save data
- Clearing browser history may delete data
- Students should download files to backup

### Customization
- Edit `styles.css` to change colors/fonts
- Modify the form in `index.html` to add/remove fields
- Update the poster template in `script.js`

## FAQ

**Q: Will students lose their posters if they close the browser?**
A: No! The poster stays saved unless they clear their browser history.

**Q: Can I print the posters?**
A: Yes! Each student can print their own, or they can be printed from the gallery view.

**Q: What if a student doesn't have a photo?**
A: Photo is optional - posters will still look great with a default placeholder.

**Q: Can I add more fields to the form?**
A: Yes! Edit `index.html` to add new form fields and update `script.js` to display them.

**Q: How do students share their posters?**
A: They can download the poster as an HTML file and email it, or take a screenshot.

**Q: Is student data private?**
A: Yes! Everything is stored locally in their browser. No data is sent to any server.

## Troubleshooting

**Issue**: Posters not saving
- Make sure student isn't using private/incognito mode
- Check that JavaScript is enabled

**Issue**: Photos not loading
- Verify the image URL is correct and publicly accessible
- Try a different image hosting service

**Issue**: Browser compatibility problems
- Try a different browser
- Update to the latest browser version

## Customization Ideas

- Change school colors in `styles.css`
- Add a school logo to the header
- Modify the form fields to match your specific requirements
- Create a theme for posters (e.g., specific colors/fonts)

## Support

For technical questions or issues:
1. Check the `SETUP_INSTRUCTIONS.md` file
2. Review the code comments in `script.js`
3. Test in different browsers

---

**Created for Browning High School Advisory Program**
