# 📖 AFH WABO Floor Plan AI - Complete User Manual

## 🎯 **Table of Contents**

1. [Introduction & Overview](#introduction--overview)
2. [Getting Started](#getting-started)
3. [Interface Guide](#interface-guide)
4. [Step-by-Step Workflows](#step-by-step-workflows)
5. [Advanced Features](#advanced-features)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)
8. [Professional Use Guidelines](#professional-use-guidelines)
9. [FAQ & Support](#faq--support)

---

## 🚀 **Introduction & Overview**

### **What is AFH WABO Floor Plan AI?**

AFH WABO Floor Plan AI is a revolutionary AI-powered application designed specifically for converting single-family homes into Adult Family Homes (AFH) in Washington State. The application uses advanced artificial intelligence to generate professional-quality floor plans from simple text descriptions, ensuring WABO (Washington Administrative Building Code) compliance.

### **Who Should Use This Application?**

- **Property Owners**: Converting homes to AFH businesses
- **Real Estate Investors**: Evaluating AFH conversion potential
- **Contractors**: Planning renovation projects
- **Architects**: Initial concept development and client presentations
- **Permit Applicants**: Preparing documentation for building permits
- **Property Managers**: Planning facility improvements

### **Key Benefits**

- **Cost Savings**: Reduce architectural fees by 70-80%
- **Time Efficiency**: Generate plans in minutes instead of weeks
- **Compliance Assurance**: Automatic WABO compliance checking
- **Professional Quality**: Permit-ready drawings and documentation
- **Easy Learning Curve**: No CAD experience required
- **Instant Results**: Real-time plan generation and modification

### **What Makes This Different?**

Unlike traditional CAD software or generic floor plan tools, AFH WABO Floor Plan AI is specifically designed for:

- **WABO Compliance**: Built-in knowledge of Washington State building codes
- **AFH Requirements**: Understanding of Adult Family Home regulations
- **Accessibility Standards**: Automatic ADA compliance checking
- **Permit Readiness**: Professional drawings suitable for building departments
- **Cost Optimization**: Balance compliance with budget constraints

---

## 🏁 **Getting Started**

### **System Requirements**

#### **Minimum Requirements**
- **Operating System**: Windows 10, macOS 10.15, or Ubuntu 18.04+
- **Processor**: Intel i3 or AMD equivalent
- **Memory**: 4GB RAM
- **Storage**: 2GB free space
- **Internet**: Stable broadband connection
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

#### **Recommended Requirements**
- **Operating System**: Windows 11, macOS 12+, or Ubuntu 20.04+
- **Processor**: Intel i5 or AMD Ryzen 5
- **Memory**: 8GB RAM or more
- **Storage**: 5GB free space
- **Internet**: High-speed broadband (25+ Mbps)
- **Browser**: Latest version of Chrome or Firefox

### **Initial Setup Process**

#### **Step 1: Access the Application**
1. **Open Web Browser**: Launch your preferred browser
2. **Navigate to Application**: Go to [http://localhost:3000](http://localhost:3000)
3. **Verify Loading**: Ensure the application loads completely
4. **Check API Status**: Verify OpenAI connection is active

#### **Step 2: API Key Configuration**
1. **Obtain OpenAI API Key**:
   - Visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
   - Create account or sign in
   - Click "Create new secret key"
   - Copy the generated key (save securely)

2. **Configure Application**:
   - Create `.env.local` file in project directory
   - Add: `OPENAI_API_KEY=your_api_key_here`
   - Restart the development server

3. **Verify Configuration**:
   - Test with a simple floor plan generation
   - Check for error messages in browser console
   - Confirm API credits are available

#### **Step 3: First Project Setup**
1. **Plan Your Project**: Decide on before/after plan requirements
2. **Gather Information**: Collect property details and measurements
3. **Prepare Descriptions**: Write detailed layout descriptions
4. **Set Budget**: Determine project budget and constraints
5. **Timeline Planning**: Establish project timeline and milestones

### **Understanding the Interface**

#### **Main Dashboard Layout**
- **Header Section**: Application title, navigation, and user controls
- **Welcome Area**: Project overview and quick start options
- **Feature Cards**: Key capabilities and benefits
- **Progress Tracker**: Current project status and next steps
- **Action Buttons**: Primary user actions and navigation

#### **Navigation Elements**
- **New Project**: Start a fresh floor plan project
- **Load Project**: Continue existing work
- **Settings**: Configure application preferences
- **Help**: Access documentation and support
- **Export**: Download generated plans

---

## 🖥️ **Interface Guide**

### **Main Application Interface**

#### **Header Section**
The header contains essential navigation and status information:

- **Application Logo**: AFH WABO Floor Plan AI branding
- **Project Status**: Current project name and progress
- **User Controls**: Settings, help, and account options
- **API Status**: OpenAI connection status indicator
- **Quick Actions**: New project, save, export buttons

#### **Welcome Section**
The welcome area provides project overview and quick start options:

- **Project Title**: Current project name and description
- **Progress Indicators**: Visual progress through workflow
- **Quick Start Buttons**: Jump to specific workflow steps
- **Recent Projects**: Access to previously created plans
- **Templates**: Pre-built plan templates for common scenarios

#### **Feature Cards**
Three main feature cards highlight key capabilities:

1. **Before & After Plans Card**:
   - Green icon with building symbol
   - Description of dual plan generation
   - Link to plan creation workflow

2. **AI-Powered Generation Card**:
   - Blue icon with magic wand symbol
   - Description of AI capabilities
   - Link to description input form

3. **Compliance Checking Card**:
   - Purple icon with document symbol
   - Description of compliance features
   - Link to compliance analysis

### **Description Form Interface**

#### **Plan Type Selection**
- **Before (Existing) Option**:
  - Radio button selection
  - Building icon indicator
  - Description of existing layout capture

- **After (WABO Compliant) Option**:
  - Radio button selection
  - Home icon indicator
  - Description of compliant layout generation

#### **Property Information Fields**
- **Square Footage Input**:
  - Number input field
  - Validation for minimum 100 sq ft
  - Optional field with helpful placeholder

- **Bedroom Count**:
  - Number input field
  - Range validation (0-10)
  - Optional field for planning purposes

- **Bathroom Count**:
  - Number input field
  - Range validation (0-5)
  - Optional field for planning purposes

#### **Description Text Area**
- **Large Text Input**: Multi-line text area for detailed descriptions
- **Character Counter**: Real-time character count and limits
- **Placeholder Text**: Helpful examples and guidance
- **Auto-Save**: Automatic saving of draft descriptions

#### **Prompt Generation Buttons**
- **Generate Before Prompt**: Pre-fills description for existing layout
- **Generate After Prompt**: Pre-fills description for compliant layout
- **Clear Form**: Resets all input fields
- **Save Draft**: Saves current progress

### **Floor Plan Canvas Interface**

#### **Canvas Display Area**
- **High-Resolution Canvas**: Professional-quality floor plan rendering
- **Zoom Controls**: Mouse wheel zoom, zoom in/out buttons
- **Pan Controls**: Click and drag to navigate large plans
- **Scale Indicator**: Shows current scale and measurements

#### **Room Information Panel**
- **Room Details**: Name, type, dimensions, and area
- **Compliance Status**: Visual indicators for compliance issues
- **Modification Options**: Edit room properties and requirements
- **Color Coding**: Visual identification of different room types

#### **Interactive Elements**
- **Clickable Rooms**: Click rooms for detailed information
- **Hover Effects**: Visual feedback on interactive elements
- **Selection Highlighting**: Clear indication of selected elements
- **Context Menus**: Right-click options for room modifications

### **Comparison Interface**

#### **View Mode Controls**
- **Side-by-Side View**: Split screen comparison of before/after plans
- **Overlay View**: Superimposed plans with transparency
- **Before Only**: Display only existing plan
- **After Only**: Display only compliant plan

#### **Comparison Tools**
- **Synchronized Navigation**: Pan and zoom both plans together
- **Difference Highlighting**: Visual indication of changes
- **Measurement Overlay**: Show dimensions and area changes
- **Compliance Indicators**: Side-by-side compliance comparison

#### **Export Controls**
- **Individual Export**: Download before or after plans separately
- **Combined Export**: Download comparison view
- **Format Selection**: Choose PNG, PDF, or SVG export
- **Scale Options**: Select appropriate scale for permit applications

---

## 📋 **Step-by-Step Workflows**

### **Workflow 1: Creating Your First Before Plan**

#### **Phase 1: Project Initialization**
1. **Launch Application**:
   - Open browser and navigate to [http://localhost:3000](http://localhost:3000)
   - Wait for application to load completely
   - Verify API connection status is green

2. **Start New Project**:
   - Click "New Project" button in header
   - Enter project name (e.g., "Smith Residence AFH Conversion")
   - Add project description if desired
   - Click "Create Project"

3. **Select Plan Type**:
   - Choose "Before (Existing)" radio button
   - Review the plan type description
   - Proceed to property information section

#### **Phase 2: Property Information Input**
1. **Enter Basic Information**:
   - Square footage: Enter known square footage (e.g., 1500)
   - Bedrooms: Enter current bedroom count (e.g., 3)
   - Bathrooms: Enter current bathroom count (e.g., 1)
   - Click "Next" to proceed

2. **Property Details**:
   - Property age: Enter construction year (e.g., 1940)
   - Property style: Select from dropdown (e.g., "Traditional")
   - Foundation type: Select if known (e.g., "Crawl space")
   - Click "Next" to proceed

#### **Phase 3: Detailed Description**
1. **Room-by-Room Description**:
   ```
   Example Description:
   "1940s single-family home, 1,500 sq ft, main floor layout:
   - Living room: 12x14 feet, north-facing windows, fireplace on east wall
   - Kitchen: 10x12 feet, galley style, appliances on north wall
   - Dining room: 8x10 feet, connected to kitchen, south-facing window
   - Master bedroom: 12x12 feet, west-facing window, closet on north wall
   - Second bedroom: 10x10 feet, east-facing window, small closet
   - Third bedroom: 10x8 feet, north-facing window, no closet
   - Bathroom: 5x8 feet, tub/shower combo, single vanity, toilet
   - Hallway: 3x20 feet, connects all rooms, narrow width
   
   Current issues: narrow doorways (28"), high window sills (50"), 
   small bathroom, no accessible features"
   ```

2. **Structural Information**:
   - Note any known structural elements
   - Mention load-bearing walls if known
   - Include any existing modifications
   - Add utility information if relevant

3. **Compliance Issues**:
   - List known non-compliant features
   - Note accessibility barriers
   - Mention safety concerns
   - Include any previous permit issues

#### **Phase 4: Plan Generation**
1. **Review Description**:
   - Read through complete description
   - Check for accuracy and completeness
   - Add any missing details
   - Click "Generate Floor Plan"

2. **AI Processing**:
   - Wait for AI to process description (30-60 seconds)
   - Monitor progress indicator
   - Do not close browser during processing
   - Check for error messages

3. **Review Generated Plan**:
   - Examine room layout and dimensions
   - Check room labels and measurements
   - Verify door and window placement
   - Review compliance status

#### **Phase 5: Plan Refinement**
1. **Identify Issues**:
   - Review compliance checker results
   - Note any inaccuracies in room layout
   - Check dimension accuracy
   - Identify missing elements

2. **Modify Description**:
   - Update description with corrections
   - Add missing details
   - Clarify ambiguous elements
   - Regenerate plan if needed

3. **Final Review**:
   - Confirm plan accuracy
   - Save project
   - Proceed to after plan generation

### **Workflow 2: Creating WABO-Compliant After Plan**

#### **Phase 1: Plan Type Selection**
1. **Select After Plan**:
   - Choose "After (WABO Compliant)" radio button
   - Review WABO compliance requirements
   - Understand accessibility standards
   - Proceed to requirements input

2. **Compliance Overview**:
   - Review key WABO requirements
   - Understand accessibility standards
   - Note fire safety requirements
   - Consider structural limitations

#### **Phase 2: Requirements Definition**
1. **Resident Capacity**:
   - Enter desired resident count (e.g., 6 residents)
   - Consider bedroom requirements (80 sq ft minimum)
   - Plan for common areas
   - Account for staff areas

2. **Accessibility Requirements**:
   - Specify accessible features needed
   - Plan for wheelchair accessibility
   - Consider future accessibility needs
   - Include grab bar requirements

3. **Safety Requirements**:
   - Plan interconnected smoke alarms
   - Design emergency egress routes
   - Consider fire safety features
   - Include security considerations

#### **Phase 3: Detailed Description**
1. **WABO-Compliant Description**:
   ```
   Example Description:
   "Convert to 6-bed AFH with full WABO compliance:
   - Living room: Expand to 14x16 feet, accessible design
   - Kitchen: Modify to 12x14 feet, accessible counters (34" height), 
     knee clearance under sink, accessible controls
   - Dining room: Expand to 10x12 feet, accessible table space
   - Resident bedrooms: 6 bedrooms, each 10x10 feet minimum, 
     accessible doorways (32" clear), accessible windows
   - Accessible bathroom: 8x10 feet, roll-in shower (30x48"), 
     grab bars, accessible toilet, accessible vanity
   - Staff bathroom: 5x8 feet, standard fixtures
   - Hallways: Widen to 4 feet minimum, accessible throughout
   - Emergency egress: All windows 44" max sill height, 5.7 sq ft clear opening
   - Safety systems: Interconnected smoke/CO alarms throughout
   - Accessible features: 32" doorways, accessible hardware, 
     accessible electrical controls"
   ```

2. **Compliance Specifications**:
   - Include specific WABO code references
   - Note accessibility requirements
   - Specify safety system requirements
   - Include structural considerations

3. **Budget and Timeline**:
   - Consider budget constraints
   - Plan for phased implementation
   - Include cost-saving measures
   - Note timeline requirements

#### **Phase 4: Plan Generation and Review**
1. **Generate Compliant Plan**:
   - Click "Generate Floor Plan"
   - Wait for AI processing
   - Review generated layout
   - Check compliance status

2. **Compliance Verification**:
   - Review compliance checker results
   - Address any compliance issues
   - Verify accessibility features
   - Check safety requirements

3. **Plan Optimization**:
   - Refine layout for efficiency
   - Optimize space utilization
   - Consider maintenance access
   - Plan for future modifications

### **Workflow 3: Before/After Comparison and Analysis**

#### **Phase 1: Access Comparison View**
1. **Navigate to Comparison**:
   - Click "View Comparison" button
   - Wait for both plans to load
   - Select comparison view mode
   - Choose synchronized navigation

2. **View Mode Selection**:
   - **Side-by-Side**: Best for detailed comparison
   - **Overlay**: Best for change visualization
   - **Before Only**: Focus on existing conditions
   - **After Only**: Focus on compliant design

#### **Phase 2: Detailed Comparison Analysis**
1. **Room-by-Room Analysis**:
   - Compare room sizes and layouts
   - Note dimensional changes
   - Identify space reallocation
   - Review accessibility improvements

2. **Compliance Comparison**:
   - Review before compliance issues
   - Check after compliance status
   - Note remaining issues
   - Plan additional modifications

3. **Cost Impact Analysis**:
   - Estimate construction costs
   - Identify major modifications
   - Plan phased implementation
   - Consider budget optimization

#### **Phase 3: Export and Documentation**
1. **Export Individual Plans**:
   - Download before plan as PNG
   - Download after plan as PNG
   - Choose appropriate scale
   - Include compliance annotations

2. **Export Comparison View**:
   - Create side-by-side comparison
   - Include transformation summary
   - Add compliance analysis
   - Include cost estimates

3. **Prepare Permit Documentation**:
   - Organize plan files
   - Create compliance report
   - Prepare permit application
   - Schedule professional review

---

## 🔧 **Advanced Features**

### **Advanced Description Techniques**

#### **Optimizing AI Generation**
1. **Specific Measurements**:
   - Include exact dimensions when known
   - Use standard architectural terminology
   - Reference specific WABO code sections
   - Mention structural constraints

2. **Context and Constraints**:
   - Describe neighborhood context
   - Note budget limitations
   - Include timeline constraints
   - Mention accessibility needs

3. **Iterative Refinement**:
   - Generate multiple versions
   - Compare different approaches
   - Refine based on results
   - Optimize for compliance

#### **Professional Terminology**
- **Architectural Terms**: Use proper architectural language
- **WABO References**: Include specific code sections
- **Accessibility Standards**: Reference ADA requirements
- **Safety Standards**: Include fire and life safety terms

### **Compliance Optimization Strategies**

#### **Prioritizing Compliance Issues**
1. **Safety First**: Address life safety issues immediately
2. **Accessibility**: Plan for current and future accessibility
3. **Structural**: Consider load-bearing requirements
4. **Utilities**: Plan for electrical and plumbing needs

#### **Cost-Benefit Analysis**
1. **High-Impact Changes**: Focus on changes with greatest compliance benefit
2. **Low-Cost Solutions**: Identify inexpensive compliance improvements
3. **Phased Implementation**: Plan for staged improvements
4. **Alternative Approaches**: Consider multiple solutions

### **Export and Documentation**

#### **Professional Export Options**
1. **High-Resolution PNG**: For presentations and reviews
2. **PDF Format**: For permit applications
3. **SVG Format**: For further editing
4. **DWG Format**: For CAD integration

#### **Permit-Ready Documentation**
1. **Title Blocks**: Include project information
2. **Scale Indicators**: Show proper scale
3. **Compliance Notes**: Include WABO references
4. **Professional Stamping**: Space for architect signature

---

## 🔧 **Troubleshooting**

### **Common Issues and Solutions**

#### **API Connection Problems**
1. **Check API Key**:
   - Verify API key is correct
   - Ensure key has sufficient credits
   - Check API key permissions
   - Regenerate key if necessary

2. **Network Issues**:
   - Check internet connection
   - Verify firewall settings
   - Try different network
   - Contact IT support if needed

#### **Plan Generation Issues**
1. **Poor Plan Quality**:
   - Improve description detail
   - Use more specific measurements
   - Include structural information
   - Try different description approach

2. **Compliance Issues**:
   - Review WABO requirements
   - Check accessibility standards
   - Consult with architect
   - Modify requirements

#### **Performance Problems**
1. **Slow Loading**:
   - Check internet speed
   - Close other applications
   - Clear browser cache
   - Try different browser

2. **Memory Issues**:
   - Close unnecessary tabs
   - Restart browser
   - Check system memory
   - Update browser version

### **Error Messages and Solutions**

#### **"API Key Invalid"**
- **Cause**: Incorrect or expired API key
- **Solution**: Verify key in OpenAI dashboard
- **Prevention**: Save key securely, check regularly

#### **"Generation Failed"**
- **Cause**: Description too vague or complex
- **Solution**: Simplify description, add more detail
- **Prevention**: Use clear, specific language

#### **"Compliance Check Failed"**
- **Cause**: Plan doesn't meet WABO requirements
- **Solution**: Modify requirements, consult architect
- **Prevention**: Review WABO standards before generation

### **Getting Help**

#### **Self-Help Resources**
1. **Documentation**: Review user manual and README
2. **Video Tutorials**: Watch step-by-step guides
3. **Community Forum**: Search for similar issues
4. **FAQ Section**: Check frequently asked questions

#### **Professional Support**
1. **Technical Support**: Contact development team
2. **Architectural Consultation**: Hire licensed architect
3. **WABO Consultation**: Contact local building department
4. **Professional Services**: Use professional plan review

---

## 📚 **Best Practices**

### **Description Writing Best Practices**

#### **Effective Description Structure**
1. **Start with Overview**:
   - Property type and age
   - Total square footage
   - Current use and intended use
   - Key constraints and requirements

2. **Room-by-Room Detail**:
   - Exact dimensions when known
   - Window and door locations
   - Current fixtures and features
   - Accessibility issues

3. **Compliance Requirements**:
   - Specific WABO requirements
   - Accessibility standards
   - Safety requirements
   - Structural limitations

#### **Language and Terminology**
1. **Use Standard Terms**:
   - Architectural terminology
   - WABO code references
   - Accessibility standards
   - Safety requirements

2. **Be Specific**:
   - Include exact measurements
   - Reference specific codes
   - Mention constraints
   - Include context

### **Project Planning Best Practices**

#### **Information Gathering**
1. **Property Assessment**:
   - Measure all rooms accurately
   - Note structural elements
   - Document existing issues
   - Photograph current conditions

2. **Requirement Definition**:
   - Define resident capacity
   - Specify accessibility needs
   - Plan safety requirements
   - Consider budget constraints

#### **Professional Integration**
1. **Architect Consultation**:
   - Review AI-generated plans
   - Verify compliance
   - Make necessary modifications
   - Prepare final drawings

2. **Permit Preparation**:
   - Organize documentation
   - Prepare application materials
   - Schedule inspections
   - Coordinate with contractors

### **Quality Assurance**

#### **Plan Review Process**
1. **Accuracy Check**:
   - Verify room dimensions
   - Check door and window placement
   - Confirm accessibility features
   - Review safety requirements

2. **Compliance Verification**:
   - Run compliance checker
   - Address all issues
   - Document solutions
   - Plan modifications

#### **Professional Review**
1. **Architect Review**:
   - Have plans reviewed by licensed architect
   - Verify WABO compliance
   - Check structural requirements
   - Prepare for permit submission

2. **Building Department Review**:
   - Submit plans for review
   - Address comments
   - Make required modifications
   - Obtain permit approval

---

## 🏛️ **Professional Use Guidelines**

### **Legal and Professional Considerations**

#### **Limitations and Disclaimers**
1. **Conceptual Plans**: AI-generated plans are conceptual only
2. **Professional Review**: All plans require architect review
3. **Permit Approval**: No guarantee of permit approval
4. **Liability**: Users assume full responsibility

#### **Professional Standards**
1. **Architect Review**: Required for all permit applications
2. **Structural Engineering**: Required for structural modifications
3. **Code Compliance**: Verify all requirements with authorities
4. **Insurance**: Consider professional liability implications

### **Permit Application Process**

#### **Documentation Requirements**
1. **Professional Drawings**: Architect-stamped plans required
2. **Compliance Documentation**: WABO compliance verification
3. **Structural Analysis**: Engineering calculations if needed
4. **Application Forms**: Complete permit application

#### **Review Process**
1. **Plan Review**: Building department review
2. **Comments Response**: Address all comments
3. **Modifications**: Make required changes
4. **Final Approval**: Obtain permit approval

### **Cost and Timeline Considerations**

#### **Budget Planning**
1. **AI Tool Costs**: Minimal cost for plan generation
2. **Professional Review**: Architect fees for final review
3. **Permit Costs**: Building department fees
4. **Construction Costs**: Actual renovation expenses

#### **Timeline Planning**
1. **Plan Generation**: Hours to days with AI tool
2. **Professional Review**: Days to weeks for architect
3. **Permit Review**: Weeks to months for approval
4. **Construction**: Months for actual renovation

---

## ❓ **FAQ & Support**

### **Frequently Asked Questions**

#### **General Questions**
**Q: How accurate are the AI-generated plans?**
A: AI-generated plans are conceptual and require professional review. They provide excellent starting points but must be verified by licensed architects.

**Q: Can I use these plans for permit applications?**
A: Plans require architect review and stamping before permit submission. The AI tool provides the foundation, but professional verification is essential.

**Q: How much does it cost to use this tool?**
A: The tool itself is free, but you need OpenAI API credits (approximately $0.01-$0.05 per plan generation). Professional architect review costs vary.

#### **Technical Questions**
**Q: What if the AI generates an inaccurate plan?**
A: Refine your description with more specific details, try different approaches, or consult with an architect for guidance.

**Q: Can I modify the generated plans?**
A: Currently, plans are generated from descriptions. For modifications, update your description and regenerate the plan.

**Q: How do I ensure WABO compliance?**
A: The tool includes compliance checking, but always have a licensed architect verify compliance before permit submission.

#### **Professional Questions**
**Q: Do I need an architect to use this tool?**
A: No, but you need an architect to review final plans for permit applications. The tool helps with initial planning and concept development.

**Q: How does this compare to hiring an architect?**
A: This tool provides cost-effective initial planning. Professional architects are still required for final plans and permit applications.

**Q: What if I disagree with the compliance checker?**
A: The compliance checker is a guide. Always verify with local building authorities and licensed professionals.

### **Support Resources**

#### **Technical Support**
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Comprehensive guides and tutorials
- **Video Tutorials**: Step-by-step video guides
- **Community Forum**: User community support

#### **Professional Resources**
- **WABO Code**: Washington Administrative Building Code
- **ADA Standards**: Americans with Disabilities Act
- **Local Building Departments**: City and county requirements
- **Professional Architects**: Licensed design professionals

#### **Training and Education**
- **User Manual**: Complete 50+ page guide
- **Video Series**: 20+ tutorial videos
- **Webinars**: Monthly training sessions
- **Certification**: Professional user certification

---

*This comprehensive user manual provides everything needed to effectively use the AFH WABO Floor Plan AI application. For additional support, please refer to the support resources listed above or contact the development team.*
