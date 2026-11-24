const CODEFRAME_MAX_HEIGHT = 900;
const CODE_EDITOR_MAX_HEIGHT = 870;

function applyCodeFrameHeight(frame, self) {
  const doc = self.document;
  const codeMirror = doc.querySelector(".CodeMirror");
  const codeMirrorScroll = doc.querySelector(".CodeMirror-scroll");
  const bodyHeight = doc.body ? doc.body.scrollHeight : 0;
  const codeHeight = codeMirror
    ? Math.max(codeMirror.scrollHeight || 0, codeMirror.offsetHeight || 0)
    : 0;
  const naturalHeight = Math.max(bodyHeight, codeHeight) + 30;

  if (naturalHeight > CODEFRAME_MAX_HEIGHT) {
    frame.style.height = CODEFRAME_MAX_HEIGHT + "px";
    if (codeMirror) {
      codeMirror.style.height = CODE_EDITOR_MAX_HEIGHT + "px";
      codeMirror.style.overflowY = "hidden";
    }
    if (codeMirrorScroll) {
      codeMirrorScroll.style.height = CODE_EDITOR_MAX_HEIGHT + "px";
      codeMirrorScroll.style.overflowY = "scroll";
    }
  } else {
    frame.style.height = naturalHeight + "px";
    if (codeMirror) {
      codeMirror.style.height = "auto";
      codeMirror.style.overflowY = "visible";
    }
    if (codeMirrorScroll) {
      codeMirrorScroll.style.height = "auto";
      codeMirrorScroll.style.overflowY = "visible";
    }
  }
}

function frameResized(self) {
  var frames = document.getElementsByClassName("codeframe")
  for (const frame of frames) {
    if (frame.contentWindow === self) {
      setTimeout(function() {
        applyCodeFrameHeight(frame, self);
      }, 10);

      setTimeout(function() {
        applyCodeFrameHeight(frame, self);
      }, 500);
    }
  }
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