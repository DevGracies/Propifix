export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", // e.g., "Aug"
      day: "numeric", // e.g., "9"
    });
  }
  