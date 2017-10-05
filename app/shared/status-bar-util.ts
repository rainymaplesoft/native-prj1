import * as application from 'application';
import * as platform from 'platform'

declare var android: any;

export function setStatusBarColors() {
    application.on(application.launchEvent, () => {
        console.log('APP LAUNCHED');
        if (platform.isAndroid) {
            console.log('PLATFORM IS ANDROID');
            application.android.startActivity = function () {
                if (application.android && platform.device.sdkVersion >= "21") {
                    console.log('SETTING STATUS BAR COLOR');
                    const View = android.view.View;
                    const window = application.android.startActivity.getWindow();
                    //window.setStatusBarColor(0x000000);
                    window.setStatusBarColor(0x100000);

                    const decorView = window.getDecorView();
                    decorView.setSystemUiVisibility(
                        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
                }
            };
        }

    })
}
