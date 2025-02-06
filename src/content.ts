// Conventional Comment prefixes
const PREFIXES = [
  "praise",
  "nitpick",
  "suggestion",
  "issue",
  "todo",
  "question",
  "thought",
  "chore",
  "note",
];

function addConventionalCommentBar(node) {
  // Find the comment box header
  const commentHeader = node.querySelector(".CommentBox-header");

  if (!commentHeader) return;

  // Create prefix container
  const prefixContainer = document.createElement("div");
  prefixContainer.className = "conventional-comment-prefixes";

  // Create prefix buttons
  PREFIXES.forEach((prefix) => {
    const prefixButton = document.createElement("button");
    prefixButton.textContent = prefix + ":";
    prefixButton.className = "conventional-comment-prefix";
    prefixButton.type = "button";

    prefixButton.addEventListener("click", (event) => {
      // Find the comment field
      const commentField =
        commentHeader.parentElement.querySelector(".js-comment-field");

      if (commentField) {
        // Remove existing prefixes
        const currentValue = commentField.value;
        const cleanedValue = currentValue.replace(
          /^(praise|nitpick|suggestion|issue|todo|question|thought|chore|note):\s*/i,
          ""
        );

        // Add new prefix
        commentField.value = `${prefix}: ${cleanedValue.trim()}`;

        // Trigger any necessary events (like input or change)
        commentField.dispatchEvent(new Event("input", { bubbles: true }));
        commentField.dispatchEvent(new Event("change", { bubbles: true }));

        setTimeout(() => {
          commentField.focus();
        }, 100);
      }
    });

    prefixContainer.appendChild(prefixButton);
  });

  // Insert the prefix container after the comment header
  commentHeader.insertAdjacentElement("afterend", prefixContainer);
}

// Run on page load and watch for dynamic content
function init() {
  // addConventionalCommentBar();

  // Optional: Use a MutationObserver for dynamic content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const nodes = Array.from(mutation.addedNodes);
      for (const node of nodes) {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName === "TR" &&
          node.classList.contains("js-inline-comments-container")
        ) {
          addConventionalCommentBar(node);
        }
        break;
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Start the script
init();
