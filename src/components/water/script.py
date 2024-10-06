import numpy as np
import matplotlib.pyplot as plt

# Generate random data for the heatmap
data = np.random.rand(20, 20)  # Change the shape (10, 10) as needed

# Create a heatmap
plt.imshow(data, cmap='hot', interpolation='nearest')
plt.colorbar()  # Optional: Adds a color bar to indicate the scale

# Save the heatmap as an image in the same directory as the script
image_path = 'heatmap3.png'
plt.savefig(image_path)

# Show the heatmap
plt.show()

print(f"Heatmap saved as {image_path}")
