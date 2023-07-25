# Azure App Configuration Converter

Copy a configuration from:

```json
[
  {
    "name": "SettingsKey1",
    "value": "SettingsValue1",
    "slotSetting": false
  },
  {
    "name": "SettingsKey2",
    "value": "SettingsValue2",
    "slotSetting": false
  }
]
```

...to:

```json
{
  "SettingsKey1": "SettingsValue1",
  "SettingsKey2": "SettingsValue2"
}
```

## Install

```bash
git clone https://github.com/dae-ne/azure-app-config-converter.git
cd ./azure-app-config-converter
npm install
```

## Run

* Copy your configuration to a clipboard (Configuration > Advanced edit).
* `npm start [-- <args>]` eg.: `npm start -- -o -i 4`
* The converted configuration is now saved in the clipboard.

## Usage

```
Usage: app [options]

Options:
  -i, --indentation <number>  number of spaces (default: 2)
  -o, --output                write output to console (default: true)
  -c, --clipboard             write output to clipboard (default: false)
  -h, --help                  display help for command
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
