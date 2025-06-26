import styles from "./feedbackSection.module.css";

function FeedbackSection() {
  return (
    <div className={styles.mainFeedback}>
      <div className={styles.containerFeedback}>
        <div className={styles.contentFeedback}>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-85e1ed3e-eb4d-49b3-86cf-4743c0c637ca"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSection;
