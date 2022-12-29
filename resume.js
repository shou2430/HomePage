const config = Zooming.config(),
TRANSITION_DURATION_DEFAULT = config.transitionDuration,
TRANSITION_DURATION_SLOW = 1.0,
TRANSITION_DURATION_FAST = 0.2,
BG_COLOR_DEFAULT = config.bgColor,
BG_COLOR_DARK = '#000',
ENABLE_GRAB_DEFAULT = config.enableGrab,
ACTIVE_CLASS = 'button-primary'

function isActive(el) {
    return el.classList.contains(ACTIVE_CLASS);
  }
  
  function activate(el) {
    el.classList.add(ACTIVE_CLASS);
  }
  
  function deactivate(el) {
    el.classList.remove(ACTIVE_CLASS);
  }