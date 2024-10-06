# Install required packages if you haven't already
# Install required packages
install.packages("ggmap")
install.packages("interp")
install.packages("ggplot2")  # Ensure ggplot2 is also installed

# Load the libraries
library(ggmap)
library(interp)
library(ggplot2)

# Define the bounding box for the area you want to map
qc <- c(left = -74, bottom = 45, right = -58, top = 52)

# Use get_stamenmap with a valid map type
map <- get_stamenmap(qc, zoom = 7, maptype = "toner-lite")  # Use valid Stamen types

# Continue with the rest of your plotting code
ggmap(map) +
  geom_tile(aes(x = x, y = y, fill = z),
            data = with(water, interp(Long, Lat, Temp, nx = 100, ny = 100,
                                      duplicate = "mean", extrap = TRUE)) |> 
              interp2xyz() |> as.data.frame()) +
  scale_fill_gradientn("Temperature", na.value = NA,
                       colours = c("blue", "green", "yellow", "orange"))
