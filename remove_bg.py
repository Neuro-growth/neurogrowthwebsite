from PIL import Image
import numpy as np

img = Image.open("public/logo.png").convert("RGBA")
data = np.array(img)

# Replace near-white pixels with transparent
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
white_mask = (r > 220) & (g > 220) & (b > 220)
data[white_mask] = [0, 0, 0, 0]

result = Image.fromarray(data)
result.save("public/logo.png", "PNG")
print("Done - white background removed")
