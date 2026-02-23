export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addShortcode("stardate", function(year, day, time) {
    return `<span class="stardate" aria-label="Stardate">⏱ Mission Year ${year} &bull; Day ${day} &bull; ${time} UTC</span>`;
  });

  eleventyConfig.addShortcode("shipAlert", function(level, message) {
    return `<div class="ship-alert ship-alert--${level}" role="note">
      <span class="ship-alert__icon">${level === 'warning' ? '⚠' : level === 'danger' ? 'X' : 'ℹ'}</span>
      <span class="ship-alert__message">${message}</span>
    </div>`;
  });
};
