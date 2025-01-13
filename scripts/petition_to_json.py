import csv
import json
from datetime import datetime


def petition_to_json():
    data_list = []
    replacements = {
        "- ": "-",
        "’": "'",
        "“": '"',
        "”": '"',
        "ë": "e",
    }

    with open("scripts/petition.tsv", mode="r", encoding="utf-16") as csv_file:
        reader = csv.DictReader(csv_file, delimiter="\t")
        for row in reader:
            name = row.get("Name", "Anonymous")

            for old, new in replacements.items():
                name = name.replace(old, new)

            raw_date = row.get("Signed On", "")
            try:
                formatted_date = datetime.strptime(raw_date, "%Y-%m-%d").strftime("%b. %d, %Y")
            except ValueError:
                formatted_date = "N/A"

            data_list.append({"name": name.title().strip(), "date": formatted_date})

    with open("src/assets/petition.json", mode="w", encoding="utf-8") as json_file:
        json.dump(data_list, json_file, indent=4)


if __name__ == "__main__":
    petition_to_json()
