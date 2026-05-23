export const checkUrlSafety = (url) => {
  let score = 100;
  let reasons = [];

  const lowerUrl = url.toLowerCase();

  // 1️⃣ HTTPS check
  if (!lowerUrl.startsWith("https://")) {
    score -= 20;
    reasons.push("Does not use HTTPS");
  }

  // 2️⃣ URL length check
  if (url.length > 75) {
    score -= 15;
    reasons.push("URL is too long");
  }

  // 3️⃣ IP address instead of domain
  const ipRegex = /(\d{1,3}\.){3}\d{1,3}/;
  if (ipRegex.test(url)) {
    score -= 30;
    reasons.push("Uses IP address instead of domain");
  }

  // 4️⃣ @ symbol check
  if (lowerUrl.includes("@")) {
    score -= 20;
    reasons.push("Contains @ symbol");
  }

  // 5️⃣ Suspicious keywords
  const keywords = ["login", "verify", "free", "win", "bonus", "otp"];
  let keywordFound = false;

  keywords.forEach((word) => {
    if (lowerUrl.includes(word)) {
      score -= 15;
      keywordFound = true;
      reasons.push(`Contains suspicious word: ${word}`);
    }
  });

  // 6️⃣ Brand impersonation detection (VERY IMPORTANT)
  const brands = ["paytm", "google", "amazon", "facebook", "instagram", "flipkart"];

  brands.forEach((brand) => {
    if (
      lowerUrl.includes(brand) &&
      !lowerUrl.includes(`://${brand}.`) &&
      !lowerUrl.includes(`://www.${brand}.`)
    ) {
      score -= 40;
      reasons.push(`Possible fake brand impersonation: ${brand}`);
    }
  });

  // 7️⃣ If keyword exists, SAFE kaakunda force cheyyi
  if (keywordFound && score > 75) {
    score = 70;
  }

  // 8️⃣ Score lower bound
  if (score < 0) score = 0;

  // 9️⃣ Final status logic (STRICT)
  let status = "Safe";
  if (score < 50) status = "Dangerous";
  else if (score < 75) status = "Suspicious";

  return {
    score,
    status,
    reasons
  };
};