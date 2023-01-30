# azure-app-config-converter

Convert Azure app config from...

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

...to

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

* Copy your configuration (Configuration > Advanced edit) to the clipboard.
* `node index.js`
* The clipboard now has a new value.

## Usage

```
Usage: index [options]

Options:
  -i, --indentation <number>  number of spaces (default: 2)
  -h, --help                  display help for command
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
