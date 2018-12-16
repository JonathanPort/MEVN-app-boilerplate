module.exports = (key) => {

    // Grab the config bootstrap file
    const configIndex = require('./../bootstrap/config');

    // Check if key contains a period `.`, if it does, split it
    // and take the first half and use as config file key.
    // This is handy in case their are keys with the same name
    // across multiple files. Allows access to those by specifying
    // the key in dot notation.
    //
    // If not, loop over all files and try to match the key

    let configKey;

    if (key.includes('.') || key.includes('/')) {

        let parts = key.split(/[./]/);

        configKey = configIndex[parts[0]]

        for (let i = 1; i < parts.length; i++) {

            configKey = configKey[parts[i]];

            if (! configKey) break;

        };

    } else {

        for (let i in configIndex) {

            for (let j = 0; j < Object.keys(configIndex[i]).length; j++) {

                if (Object.keys(configIndex[i])[j] == key) {
                    configKey = configIndex[i][Object.keys(configIndex[i])[j]];
                    break;
                }

            }

        }

        if (! configKey) configKey = false;


    }

    return configKey ? configKey : false;

}