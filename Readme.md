# LearnQuest

**LearnQuest** is an admission guide platform for students aspiring to join IUT (Islamic University of Technology). It provides valuable insights, free resources, and premium study materials to help students prepare for admission.

## Features

### Free Features
- Previous Years’ Question Papers
- Admission Insights (Merit list, cut-offs, statistics)
- BDT to USD Conversion
- Expert Advice Articles

### Premium Features
- Solved Question Papers
- Admission Preparation Books

### User Authentication & Role-Based Access
- Only authenticated users can access protected routes (e.g., courses, exams).
- **IUT Standard Quiz**: Only logged-in users can attempt the quiz.
- Admins can add or delete questions in the quiz system. The questions are randomly selected each time.
- **Role-Based Access**: Different roles for Admins and Users. Only Admins can see the Add Question Interface.

## Technologies
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB


## Installation

### Prerequisites
- Ensure that you have **Git**, **Node.js**, and **npm** installed.

### Clone the Repository
1. Install **Git** if you don't have it already:
   - For Windows: Download from [git-scm.com](https://git-scm.com/download/win)
   - For macOS: Install via Homebrew: `brew install git`
   - For Linux: Use your package manager: `sudo apt install git`

2. Clone the repository:
   ```bash
   git clone https://github.com/kazishakkhar17/LearnQuest.git
