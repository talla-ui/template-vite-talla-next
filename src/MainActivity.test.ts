import { describe, test, useTestContext } from "@talla-ui/test-handler";
import { MainActivity } from "./MainActivity";

describe("MainActivity", (scope) => {
  let activity: MainActivity;
  scope.beforeEach(() => {
    const app = useTestContext();
    activity = new MainActivity();
    app.addActivity(activity, true);
  });

  test("Counter shows 0 at first", async (t) => {
    await t.expectOutputAsync(100, { text: "0" });
  });

  test("Counter goes up when button clicked", async (t) => {
    let btnOut = await t.expectOutputAsync(100, {
      type: "button",
      accessibleLabel: "Increment counter",
    });
    btnOut.getSingle().click().click();
    await t.expectOutputAsync(100, { text: "2" });
  });
});
