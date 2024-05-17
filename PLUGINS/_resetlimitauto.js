import cron from 'node-cron';

export async function all(m) {
// reset limit setiap jam 5 pagi jika limit dibawah 7
    cron.schedule('0 10 01 * * *', async () => {

        let data = Object.keys(db.data.users)
        let user = db.data.users
        for (let usr of data) {
            if (user[usr].limit < 7) {
                user[usr].limit = 25
            }
        }
    }, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    });

}

/**
Reset limit otomatis
**/