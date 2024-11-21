import React, { useState } from "react";
import "./GuidelineUpdate.css";

const articles = [
    {
        title: "How to Prepare for IUT Admission Tests",
        image: "https://www.prialto.com/hs-fs/hubfs/image%20%282%29-1.jpg?width=870&height=500&name=image%20%282%29-1.jpg",
        description: "Effective strategies to ace the IUT admission tests.",
        addedBy: "Ikramul Kabir",
        designation: "Educational Consultant",
        fullText: `Preparing for IUT admission tests requires a strategic approach. Start by understanding the syllabus to know which topics will be covered. This will help you focus your study efforts effectively.

    Solving past papers is crucial as it familiarizes you with the format and difficulty of the questions. Allocate specific times for each subject and adhere to this schedule, prioritizing subjects based on your strengths and weaknesses.

    Use recommended textbooks and online resources to cover the syllabus thoroughly. Regularly taking mock tests will not only assess your preparation but also help you improve your time management skills and become comfortable with the test format.

    Lastly, stay updated with any changes in the admission test pattern or syllabus by frequently checking the official IUT website.`,
    },
    {
        title: "Mastering English for the IUT Test",
        image: "https://esdubai.com/wp-content/uploads/2023/02/tips-to-learn-English-blog.jpg",
        description: "Tips for improving your English skills for the IUT admission test.",
        addedBy: "Mohammad Irfan",
        designation: "English Trainer",
        fullText: `Improving your English skills is essential for the IUT admission test. Start by building your vocabulary through regular learning and using flashcards or apps for memorization.

    Brush up on English grammar rules, paying attention to areas such as tenses, prepositions, and sentence structure. Practice reading passages and answering questions to enhance your reading comprehension skills.

    Work on writing essays and reports, focusing on clarity, coherence, and structure. Engage with English audio materials like podcasts, news, or audiobooks to improve your listening skills.

    Taking practice tests will help you familiarize yourself with the types of questions you’ll encounter and assess your progress.`,
    },
    {
        title: "Mathematics Tips for the IUT Admission Test",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230503013704/Mathematics-Banner.webp",
        description: "Focus areas and tips for mastering math for the IUT test.",
        addedBy: "Dr. Imtiaz",
        designation: "Mathematics Educator",
        fullText: `Mathematics is a critical component of the IUT admission test. Ensure you have a solid understanding of fundamental concepts, including algebra, geometry, and calculus.

    Practice solving a variety of math problems to enhance your problem-solving skills. Familiarize yourself with shortcuts and techniques to solve problems more efficiently during the test.

    Refer to math study guides and textbooks specifically designed for admission test preparation. Practice with sample papers and previous years’ questions to get an idea of the math questions you will face.

    If you struggle with certain topics, consider seeking help from a tutor or joining a study group.`,
    }
];

const GuidelineUpdate = () => {
    const [expandedArticleIndex, setExpandedArticleIndex] = useState(null);

    const toggleArticle = (index) => {
        setExpandedArticleIndex(expandedArticleIndex === index ? null : index);
    };

    return (
        <div className="guideline-update">
            <h1>Advisory Articles</h1>
            <div className="articles-container">
                {articles.map((article, index) => (
                    <div className="article-card" key={index}>
                        <img src={article.image} alt={article.title} className="article-image" />
                        <div className="article-header">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-added-by">
                                Added by: {article.addedBy} <br />
                                <span className="article-designation">{article.designation}</span>
                            </p>
                        </div>
                        <p className="article-description">{article.description}</p>
                        <button className="read-full-button" onClick={() => toggleArticle(index)}>
                            {expandedArticleIndex === index ? "Show Less" : "Read Full"}
                        </button>
                        {expandedArticleIndex === index && (
                            <div className="article-full-text">
                                <p>{article.fullText}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuidelineUpdate;
