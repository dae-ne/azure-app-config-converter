# azure-app-config-converter

Copy a configuration from an azure app and convert it to a more usable form.

## Example

Azure config:

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

Result:

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
* `node index.js`
* The converted configuration is now saved in the clipboard.

## Usage

```
Usage: index [options]

Options:
  -i, --indentation <number>  number of spaces (default: 2)
  -h, --help                  display help for command
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
