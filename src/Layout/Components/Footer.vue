<template>
  <div class="app-footer">
    <div class="app-footer__inner">
      <div class="app-footer-left">
        <FooterDots />
      </div>
      <div class="app-footer-right">
      </div>
    </div>
  </div>
</template>

<script>
import FooterDots from "./Footer/FooterDots";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

library.add(faEllipsisV);
export default {
  name: "Footer",
  components: {
    FooterDots,
  }
};
</script>
