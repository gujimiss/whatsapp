import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

export function setupVant(app: ReturnType<typeof createApp>) {
  app.use(Vant);
}