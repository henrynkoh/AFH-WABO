# 🚀 **AFH WABO Floor Plan AI - Team Onboarding Guide**

## 📍 **Repository Information**

### **Main Repository**
- **GitHub URL**: [https://github.com/henrynkoh/AFH-WABO](https://github.com/henrynkoh/AFH-WABO)
- **Clone Command**: `git clone git@github.com:henrynkoh/AFH-WABO.git`
- **Branch**: `main`
- **Status**: Active Development

### **Live Application**
- **Development Server**: [http://localhost:3000](http://localhost:3000)
- **Network Access**: [http://192.168.12.212:3000](http://192.168.12.212:3000)
- **Status**: Running with Next.js 15.5.4 + Turbopack

---

## 📚 **Essential Documentation Links**

### **Core Documentation**
| Document | Purpose | GitHub Link |
|----------|---------|-------------|
| **README.md** | Project overview, features, installation | [View README](https://github.com/henrynkoh/AFH-WABO/blob/main/README.md) |
| **USER_MANUAL.md** | Complete user guide (50+ pages) | [View Manual](https://github.com/henrynkoh/AFH-WABO/blob/main/USER_MANUAL.md) |
| **QUICK_START_GUIDE.md** | 5-minute setup guide | [View Quick Start](https://github.com/henrynkoh/AFH-WABO/blob/main/QUICK_START_GUIDE.md) |
| **VIDEO_TUTORIAL_GUIDE.md** | 20+ video tutorial scripts | [View Tutorials](https://github.com/henrynkoh/AFH-WABO/blob/main/VIDEO_TUTORIAL_GUIDE.md) |

### **Marketing & Content Documentation**
| Document | Purpose | GitHub Link |
|----------|---------|-------------|
| **FACEBOOK_ADS.md** | Facebook advertising strategy | [View Facebook Ads](https://github.com/henrynkoh/AFH-WABO/blob/main/FACEBOOK_ADS.md) |
| **INSTAGRAM_MARKETING.md** | Instagram marketing content | [View Instagram](https://github.com/henrynkoh/AFH-WABO/blob/main/INSTAGRAM_MARKETING.md) |
| **THREADS_MARKETING.md** | Threads marketing strategy | [View Threads](https://github.com/henrynkoh/AFH-WABO/blob/main/THREADS_MARKETING.md) |
| **BLOGGER_CONTENT.md** | Blogger content strategy | [View Blogger](https://github.com/henrynkoh/AFH-WABO/blob/main/BLOGGER_CONTENT.md) |
| **NAVER_BLOG_CONTENT.md** | Korean Naver Blog strategy | [View Naver Blog](https://github.com/henrynkoh/AFH-WABO/blob/main/NAVER_BLOG_CONTENT.md) |
| **TISTORY_CONTENT.md** | Korean Tistory strategy | [View Tistory](https://github.com/henrynkoh/AFH-WABO/blob/main/TISTORY_CONTENT.md) |
| **WORDPRESS_CONTENT.md** | WordPress content strategy | [View WordPress](https://github.com/henrynkoh/AFH-WABO/blob/main/WORDPRESS_CONTENT.md) |
| **NEWSLETTER_EMAIL_MARKETING.md** | Email marketing strategy | [View Newsletter](https://github.com/henrynkoh/AFH-WABO/blob/main/NEWSLETTER_EMAIL_MARKETING.md) |

---

## 🛠️ **Quick Setup Instructions**

### **1. Clone the Repository**
```bash
git clone git@github.com:henrynkoh/AFH-WABO.git
cd AFH-WABO
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Variables**
```bash
# Create .env.local file
touch .env.local

# Add your OpenAI API key
echo "OPENAI_API_KEY=your_openai_api_key_here" >> .env.local
echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> .env.local
```

### **4. Start Development Server**
```bash
npm run dev
```

### **5. Access the Application**
- **Local**: [http://localhost:3000](http://localhost:3000)
- **Network**: [http://192.168.12.212:3000](http://192.168.12.212:3000)

---

## 🏗️ **Project Structure Overview**

```
AFH-WABO/
├── src/                          # Source code
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main page
│   ├── components/               # React components
│   │   ├── DescriptionForm.tsx  # Text input interface
│   │   ├── FloorPlanCanvas.tsx  # Canvas rendering
│   │   ├── BeforeAfterComparison.tsx # Comparison interface
│   │   └── ComplianceChecker.tsx # Compliance analysis
│   └── lib/                     # Utility libraries
│       └── openai.ts           # OpenAI integration
├── public/                      # Static assets
├── *.md                        # Documentation files
└── package.json                # Dependencies
```

---

## 🎯 **Key Features & Capabilities**

### **Core Application Features**
- ✅ **AI-Powered Floor Plan Generation** - Convert verbal descriptions to floor plans
- ✅ **WABO Compliance Checking** - Automatic code compliance verification
- ✅ **Before/After Comparison** - Visual comparison of existing vs. proposed plans
- ✅ **Interactive Canvas** - Zoom, pan, and edit floor plans
- ✅ **Export Functionality** - PNG export for presentations
- ✅ **Real-time Validation** - Live compliance checking

### **Technical Stack**
- **Frontend**: Next.js 15.5.4, React, TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI GPT-4 API
- **Canvas**: HTML5 Canvas with custom rendering
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

---

## 📋 **Development Workflow**

### **Branch Strategy**
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push to GitHub
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### **Code Review Process**
1. **Create Pull Request** with detailed description
2. **Request Review** from team members
3. **Address Feedback** and make necessary changes
4. **Merge to Main** after approval

### **Testing Guidelines**
- Test all new features thoroughly
- Verify WABO compliance checking works correctly
- Test AI generation with various descriptions
- Ensure responsive design on different screen sizes

---

## 🚀 **Deployment Information**

### **Current Status**
- **Development**: Running on localhost:3000
- **Production**: Ready for deployment
- **Platforms**: Vercel, Netlify, AWS compatible

### **Deployment Commands**
```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod --dir=out
```

---

## 📞 **Communication & Support**

### **Team Communication**
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Pull Requests**: For code review and collaboration

### **Getting Help**
1. **Check Documentation**: Start with README.md and USER_MANUAL.md
2. **Search Issues**: Look for existing solutions
3. **Create Issue**: If problem persists, create detailed issue
4. **Ask Team**: Use GitHub Discussions for quick questions

### **Useful Links**
- **Repository**: [https://github.com/henrynkoh/AFH-WABO](https://github.com/henrynkoh/AFH-WABO)
- **Issues**: [https://github.com/henrynkoh/AFH-WABO/issues](https://github.com/henrynkoh/AFH-WABO/issues)
- **Discussions**: [https://github.com/henrynkoh/AFH-WABO/discussions](https://github.com/henrynkoh/AFH-WABO/discussions)

---

## 🎉 **Welcome to the Team!**

You now have everything you need to start contributing to the AFH WABO Floor Plan AI project. The comprehensive documentation and marketing materials provide a solid foundation for understanding the project scope and contributing effectively.

**Next Steps:**
1. Read the README.md for project overview
2. Follow the QUICK_START_GUIDE.md for setup
3. Explore the USER_MANUAL.md for detailed usage
4. Start contributing to the codebase!

---

*Last Updated: October 2024*
*Repository: [https://github.com/henrynkoh/AFH-WABO](https://github.com/henrynkoh/AFH-WABO)*
