type CommentPrefix =
  | "praise"
  | "nitpick"
  | "suggestion"
  | "issue"
  | "todo"
  | "question"
  | "thought"
  | "chore"
  | "note";

const PREFIXES: CommentPrefix[] = [
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

function addConventionalCommentBar(node: Element): void {
  const commentHeader = node.querySelector(".CommentBox-header");
  if (!commentHeader) return;

  const prefixContainer = document.createElement("div");
  prefixContainer.className = "conventional-comment-prefixes";

  PREFIXES.forEach((prefix) => {
    const prefixButton = document.createElement("button");
    prefixButton.textContent = `${prefix}:`;
    prefixButton.className = "conventional-comment-prefix";
    prefixButton.type = "button";

    prefixButton.addEventListener("click", () => {
      const commentField =
        commentHeader.parentElement?.querySelector<HTMLTextAreaElement>(
          ".js-comment-field"
        );
      if (!commentField) return;

      const cleanedValue = commentField.value.replace(
        /^(praise|nitpick|suggestion|issue|todo|question|thought|chore|note):\s*/i,
        ""
      );

      commentField.value = `${prefix}: ${cleanedValue.trim()}`;
      commentField.dispatchEvent(new Event("input", { bubbles: true }));
      commentField.dispatchEvent(new Event("change", { bubbles: true }));

      setTimeout(() => {
        commentField.focus();
      }, 100);
    });

    prefixContainer.appendChild(prefixButton);
  });

  commentHeader.insertAdjacentElement("afterend", prefixContainer);
}

function init(): void {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      const nodes = Array.from(mutation.addedNodes);

      for (const node of nodes) {
        if (
          node instanceof Element &&
          node.tagName === "TR" &&
          node.classList.contains("js-inline-comments-container")
        ) {
          addConventionalCommentBar(node);
          break;
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

init();
