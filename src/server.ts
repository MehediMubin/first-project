import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(config.port, () => {
            console.log(`Server is listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();
