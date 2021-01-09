class NotificationSysten {
    constructor() {
        this.GetPermision();
        this.notificationArray = new Array();

        setInterval(() => {
            this.notificationArray.forEach(ele => {
                if(new Date().getTime() > ele.time.getTime()){
                    this.notificationArray.splice(this.notificationArray.indexOf(ele), 1);
                    new Notification('Powiadomienie', {body: 'Ustawiłeś powiadomienie na notatce: ' + ele.msg});
                }
            });
        }, 1000);
    }

    GetPermision = async () => {
        this.permission = await window.Notification.requestPermission();

        if (this.permission !== 'granted') {
            console.log('Perrmision denied');
        }
    }

    AddNewDate(time, msg) {
        if(new Date().getTime() < time.getTime())
            this.notificationArray.push({ 'time': time, 'msg': msg });
    }
}
const notification = new NotificationSysten();

export { notification };