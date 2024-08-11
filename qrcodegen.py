import qrcode

# Data to be encoded into the QR code
data = """
Product_Name:Organic Tofu - Soy Paneer,Product_id:13432,Type:Food,Quantity:12
Product_Name:Choco Deck - Mini Delights,Product_id:45345,Type:Food,Quantity:134
Product_Name:Flavoured Cream Wafer Roll - Strawberry,Product_id:34535,Type:Food,Quantity:234
Product_Name:Argan-Liquid Gold Hair Spa,Product_id:34534,Type:HealthCare,Quantity:32
Product_Name:Ayurvedic Anti-Tan Face Pack,Product_id:74905,Type:Cosmetics,Quantity:234
Product_Name:Incense Sticks - Sandal,Product_id:23432,Type:Fragrance,Quantity:234
Product_Name:Plastic Dustbin - Beige,Product_id:85595,Type:Home-Appliance,Quantity:22
Product_Name:Family Sunscreen Lotion SPF 25,Product_id:39343,Type:Cosmetics,Quantity:123
Product_Name:Notebook - Unruled, Long,Product_id:23456,Type:Stationary,Quantity:233
Product_Name:Soft Drink - Lime Flavoured,Product_id:56435,Type:Beverage,Quantity:78
Product_Name:Stainless Steel Induction Base Tope,Product_id:67543,Type:Kitchen Appliance,Quantity:234
Product_Name:Brightening Serum,Product_id:89382,Type:Cosmetics,Quantity:231
Product_Name:Oxygen Moisture Shampoo,Product_id:56748,Type:Cosmetics,Quantity:212
Product_Name:Cleaner - Jewelery,Product_id:57575,Type:Detergent,Quantity:343
Product_Name:Xanthan Gum,Product_id:32343,Type:Food,Quantity:156
Product_Name:Eau De Parfum - Hydra Energy, For Men,Product_id:75757,Type:Fragrance,Quantity:78
"""

# Generate the QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)

# Create an image from the QR code instance
img = qr.make_image(fill='black', back_color='white')

# Save the image to a file
img.save("product_data_qr.png")
img.show()

print("QR code generated and saved as 'product_data_qr.png'")
