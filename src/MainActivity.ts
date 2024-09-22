import { $activity, Activity, app, ui } from "talla-ui";

const view = ui.cell(
  ui.label($activity.bind("count"), { fontSize: 40, tabularNums: true }),
  ui.button({
    icon: ui.icon.PLUS,
    accessibleLabel: "Increment counter",
    onClick: "CountUp",
    style: ui.style.BUTTON_SUCCESS,
  })
);

export class MainActivity extends Activity {
  createView() {
    return view.create();
  }

  count = 0;
  onCountUp() {
    this.count++;
  }
}

// hot reload for vite:
if (import.meta.hot) {
  import.meta.hot.accept();
  app.hotReload(import.meta, MainActivity);
}
