export default function(eleventyConfig) {
  // Passthrough copies
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  // Shortcode: stardate — generates a formatted mission timestamp
  eleventyConfig.addShortcode("stardate", function(year, day, time) {
    return `<span class="stardate" aria-label="Stardate">⏱ Mission Year ${year} &bull; Day ${day} &bull; ${time} UTC</span>`;
  });

  // Shortcode: alert — renders a ship system alert box
  eleventyConfig.addShortcode("shipAlert", function(level, message) {
    return `<div class="ship-alert ship-alert--${level}" role="note">
      <span class="ship-alert__icon">${level === 'warning' ? '⚠' : level === 'danger' ? '🔴' : 'ℹ'}</span>
      <span class="ship-alert__message">${message}</span>
    </div>`;
  });
};
