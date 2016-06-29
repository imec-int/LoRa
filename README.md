# LoRa

## LoRa p2p
Arduino setup: https://learn.adafruit.com/adafruit-rfm69hcw-and-rfm96-rfm95-rfm98-lora-packet-padio-breakouts/overview

Wij hebben niet de developmentkit die daar staat, maar de pinout is wel min of meer gelijk. De enige verschillen zijn:
* CLK = SCK
* CS = NSS
* G0 = DIO0

Opgelet, in de tutorial vergeten ze MISO te vermelden, maar deze moet waarschijnlijk toch wel aangesloten zijn.

Onze chips zijn RF96, dus je moet deze code gebruiken: https://learn.adafruit.com/adafruit-rfm69hcw-and-rfm96-rfm95-rfm98-lora-packet-padio-breakouts/rfm9x-test

### Kostprijs
In de RF96 die wij hebben, zit een SX1272 chip van Semtech (http://www.semtech.com/wireless-rf/rf-transceivers/sx1272/)
Die kost 3,59 euro in massa-aankoop: http://www.mouser.be/ProductDetail/Semtech/SX1272IMLTRT/?qs=sGAEpiMZZMtzPgOfznR9QWuBE0wtPl%252bWGR4Gk3h6A5I%3d


## LoRaWAN
LoRaWAN is nog een laag bovenop het fysische LoRa-protocol. Deze werkt met encryptiekeys, MAC-adressen, enzovoort…

Raspberry Pi shield LoRaWAN gateway installatie: http://www.daveakerman.com/?p=1719

Op de Arduino moet dan een LoRaWAN-endpoint draaien. Code hiervoor lijkt hier te staan: https://github.com/tftelkamp/arduino-lmic-v1.5 (nog niet getest)

LoRaWAN op openLoraforum: http://openlora.com/forum/viewtopic.php?t=113



