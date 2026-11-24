function frameResized(self) {
  var frames = document.getElementsByClassName("codeframe")
  for (const frame of frames) {
    if (frame.contentWindow === self) {
      setTimeout(function() {
        const doc = self.document;
        const codeMirror = doc.querySelector(".CodeMirror");
        const bodyHeight = doc.body ? doc.body.scrollHeight : 0;
        const codeHeight = codeMirror
          ? Math.max(codeMirror.scrollHeight || 0, codeMirror.offsetHeight || 0)
          : 0;
        frame.style.height = (Math.max(bodyHeight, codeHeight) + 30) + "px";
      }, 10);

      setTimeout(function() {
        frameResizedOnce(frame, self);
      }, 500);
    }
  }
}

function frameResizedOnce(frame, self) {
  const doc = self.document;
  const codeMirror = doc.querySelector(".CodeMirror");
  const bodyHeight = doc.body ? doc.body.scrollHeight : 0;
  const codeHeight = codeMirror
    ? Math.max(codeMirror.scrollHeight || 0, codeMirror.offsetHeight || 0)
    : 0;
  frame.style.height = (Math.max(bodyHeight, codeHeight) + 30) + "px";
}

function populateFrame(self, initialise) {
  var frames = document.getElementsByClassName("codeframe")
  for (const frame of frames) {
    if (frame.contentWindow === self) {
      frame.contentDocument.body.dataset.theme = document.body.dataset.theme;
      initialise(frame);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const detailsElements = document.querySelectorAll("details");

  for (const details of detailsElements) {
    details.addEventListener("toggle", function() {
      if (details.open) {
        const frames = details.getElementsByClassName("codeframe");
        setTimeout(function() {
          for (const frame of frames) {
            frameResized(frame.contentWindow);
          }
        }, 10);
      }
    });
  }

  const buttons = document.getElementsByClassName("theme-toggle");
  const frames = document.getElementsByClassName("codeframe");
  
  for (const button of buttons) {
    button.addEventListener("click", function() {
      const theme = document.body.dataset.theme;
      console.log(theme);
      for (const frame of frames) {
        const innerDoc = frame.contentDocument;
        innerDoc.body.dataset.theme = theme;
        innerDoc.refreshTheme();
      }
    });
  }
});