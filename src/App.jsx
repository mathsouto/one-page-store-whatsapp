import React, { lazy, Suspense } from "react";
import style from "./app.module.css";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Header from "./components/Header/Header";

const LazyPromotionSection = lazy(() =>
  import("./components/Main/PromotionsSection/PromotionsSection")
);
const LazyCategorySection = lazy(() =>
  import("./components/Main/CategorySection/CategorySection")
);
const LazyHelmetsSection = lazy(() =>
  import("./components/Main/HelmetsSection/HelmetsSection")
);
const LazyBrandsSection = lazy(() =>
  import("./components/Main/BrandsSection/BrandsSection")
);
const LazyClothingSection = lazy(() =>
  import("./components/Main/ClothingSection/ClothingSection")
);
const LazyCTASection = lazy(() =>
  import("./components/Main/CTASection/CTASection")
);
const LazyPartsOneSection = lazy(() =>
  import("./components/Main/PartsOneSection/PartsOneSection")
);
const LazyPartsTwoSection = lazy(() =>
  import("./components/Main/PartsTwoSection/PartsTwoSection")
);
const LazyPartsThreeSection = lazy(() =>
  import("./components/Main/PartsThreeSection/PartsThreeSection")
);
const LazyAboutSection = lazy(() =>
  import("./components/Main/AboutSection/AboutSection")
);
const LazyFeedbackSection = lazy(() =>
  import("./components/Main/FeedbackSection/FeedbackSection")
);
const LazyMapSection = lazy(() =>
  import("./components/Main/MapSection/MapSection")
);

const LazyFooter = lazy(() => import("./components/Footer/Footer"));

const App = () => {
  return (
    <div className={style.containerApp}>
      <Header />
      <div className={style.wrapperApp}>
        <WhatsappButton />
        <Suspense>
          <LazyPromotionSection />
          <LazyCategorySection />
          <LazyHelmetsSection />
          <LazyBrandsSection />
          <LazyClothingSection />
          <LazyCTASection />
          <LazyPartsOneSection />
          <LazyPartsTwoSection />
          <LazyPartsThreeSection />
          <LazyAboutSection />
          <LazyFeedbackSection />
          <LazyMapSection />
        </Suspense>
      </div>
      <LazyFooter />
    </div>
  );
};

export default App;
