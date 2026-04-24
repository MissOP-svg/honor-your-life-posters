# ⚙️ Setup Instructions

## Complete Setup Guide for Honor Your Life Posters

### Step 1: Create the GitHub Repository

1. **Go to GitHub** (github.com)
2. **Click the "+" icon** in the top right
3. **Select "New repository"**
4. **Fill in the details**:
   - Repository name: `honor-your-life-posters`
   - Description: "A digital platform for students to create and share their Honor Your Life posters"
   - Public/Private: **Public** (so students can access it)
   - Check: "Add a README file"
   - Add `.gitignore`: Choose "Node" (optional)
   - License: "MIT License" (optional)
5. **Click "Create repository"**

### Step 2: Add Files to the Repository

#### Option A: Using Git Command Line

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/honor-your-life-posters.git
   cd honor-your-life-posters
   ```

2. **Create the folder structure**:
   ```bash
   mkdir docs
   mkdir assets
   ```

3. **Add all the files** provided in this guide to the appropriate folders

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Initial commit: Add Honor Your Life Poster platform"
   git push origin main
   ```

#### Option B: Using GitHub Web Interface

1. **Go to your repository** on GitHub
2. **Click "Add file" > "Create new file"**
3. **Name the file** (e.g., `styles.css`)
4. **Paste the content** from this guide
5. **Click "Commit changes"**
6. **Repeat for all files**

### Step 3: Set Up for Student Access

#### Option 1: GitHub Pages (Recommended)

1. **Go to Settings** (top of your repository)
2. **Scroll to "Pages"**
3. **Under "Source"**, select **"main"** branch
4. **Click Save**
5. **Wait 1-2 minutes** for deployment
6. **Copy the URL** GitHub provides (should be `https://YOUR-USERNAME.github.io/honor-your-life-posters/`)
7. **Share this link** with your students!

#### Option 2: Download and Host Locally

1. **Click "Code" > "Download ZIP"**
2. **Extract the ZIP file**
3. **Open `index.html`** in a web browser
4. **Share the folder** with students (via USB, cloud storage, or email)

#### Option 3: Share on a School Server

1. **Download all files**
2. **Upload to your school's web server**
3. **Share the server URL** with students

### Step 4: Verify It Works

1. **Open the application**:
   - Option 1: Visit your GitHub Pages URL
   - Option 2: Open `index.html` in a browser
   - Option 3: Visit your school server URL

2. **Test the form**:
   - Fill out the form with test data
   - Click "Create My Poster"
   - Verify the poster appears

3. **Test the gallery**:
   - Click "View Gallery"
   - Confirm your test poster appears

4. **Test editing**:
   - Click on your poster
   - Click "Edit HTML"
   - Make a small change
   - Click "Save Changes"
   - Verify the change saved

### Step 5: Share with Students

**Create clear instructions** for your students:

```
Welcome to Honor Your Life Posters!

1. Go to: [INSERT YOUR LINK HERE]
2. Click "Create Poster"
3. Fill out the form with your information
4. Click "Create My Poster"
5. View your poster and gallery
6. Download your poster to keep a copy!

You can edit your poster's HTML code if you want to customize it further.

Questions? Ask your teacher!
```

### File Checklist

Make sure you have these files in your repository:

```
honor-your-life-posters/
├── README.md                    ✓
├── index.html                   ✓
├── styles.css                   ✓
├── script.js                    ✓
├── poster-template.html         ✓ (included in index.html)
├── docs/
│   ├── STUDENT_GUIDE.md        ✓
│   ├── TEACHER_GUIDE.md        ✓
│   └── SETUP_INSTRUCTIONS.md   ✓ (this file)
└── assets/
    └── (optional: images folder)
```

### Customization

#### Change School Colors

1. **Open `styles.css`**
2. **Find the `:root` section** at the top:
   ```css
   :root {
       --primary-color: #8B4513;      /* Brown - Change this */
       --secondary-color: #D2691E;    /* Orange - Change this */
       --accent-color: #FFD700;       /* Gold - Change this */
       ...
   }
   ```
3. **Replace color codes** with your school colors
4. **Common color codes**:
   - Red: `#FF0000`
   - Blue: `#0000FF`
   - Green: `#00AA00`
   - Purple: `#800080`
   - Use [colorpicker.com](https://colorpicker.com) to find colors

#### Add More Form Fields

1. **Open `index.html`**
2. **Find the form section**
3. **Add a new field** following this pattern:
   ```html
   <div class="form-group">
       <label for="newField">Field Label:</label>
       <input type="text" id="newField" name="newField" placeholder="Placeholder text">
   </div>
   ```
4. **Open `script.js`**
5. **In the `handleFormSubmit` function**, add:
   ```javascript
   newField: document.getElementById('newField').value,
   ```
6. **In the `generatePosterHtml` function**, add:
   ```javascript
   let newFieldHtml = '';
   if (poster.newField) {
       newFieldHtml = `<div class="poster-section"><h2>New Field</h2><p>${poster.newField}</p></div>`;
   }
   ```

### Troubleshooting

#### Issue: Page won't load
- **Solution**: Check that all files are in the correct location
- **Solution**: Make sure `index.html` is in the root folder
- **Solution**: Try a different browser

#### Issue: GitHub Pages not working
- **Solution**: Wait 2-3 minutes after enabling Pages
- **Solution**: Check that repository is **Public**
- **Solution**: Verify branch is set to **main** in Pages settings

#### Issue: Posters not saving
- **Solution**: Check that JavaScript is enabled in browser
- **Solution**: Check browser's local storage isn't disabled
- **Solution**: Try a different browser

#### Issue: Images not loading
- **Solution**: Verify the image URL is correct
- **Solution**: Check the image is publicly accessible
- **Solution**: Use a different image hosting service

#### Issue: Styles not showing
- **Solution**: Refresh the page (Ctrl+R or Cmd+R)
- **Solution**: Clear browser cache
- **Solution**: Check that `styles.css` is in the root folder

### Browser Requirements

This platform works best on:
- ✅ Chrome (latest version)
- ✅ Firefox (latest version)
- ✅ Safari (latest version)
- ✅ Edge (latest version)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Security & Privacy

- **No server**: Everything is stored in the student's browser
- **No tracking**: No analytics or data collection
- **No login**: Students don't need accounts
- **Local storage only**: Data persists until browser history is cleared
- **Download to backup**: Students should download their poster HTML

### Next Steps

1. ✅ Set up the repository
2. ✅ Enable GitHub Pages (or choose hosting option)
3. ✅ Test the platform
4. ✅ Share the link with students
5. ✅ Have students create their posters
6. ✅ View the gallery together
7. ✅ Print and display (optional)

### Support Resources

- **GitHub Help**: https://help.github.com
- **GitHub Pages Guide**: https://pages.github.com
- **HTML/CSS Resources**: https://www.w3schools.com
- **School IT Team**: Contact for server hosting questions

---

**Questions? Refer to the TEACHER_GUIDE.md or STUDENT_GUIDE.md**
