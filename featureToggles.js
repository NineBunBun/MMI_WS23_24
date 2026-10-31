// Feature toggles: enable with environment variables, e.g. FEATURE_KELVIN=true
const isEnabled = (name) =>
    String(process.env[`FEATURE_${name.toUpperCase()}`]).toLowerCase() === 'true';

module.exports = {isEnabled};
