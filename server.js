const express = require("express");

const app = express();

const provider = require("./data-provider");
const { artists, galleries, paintingsNested } = provider;

const apiHandler = require("./api-handler");
apiHandler.fetchAllArtists(artists, app);
apiHandler.fetchArtistsByNation(artists, app);

apiHandler.fetchAllGalleries(galleries, app);
apiHandler.fetchGalleriesByNation(galleries, app);

apiHandler.fetchAllPaintings(paintingsNested, app);
apiHandler.fetchPaintingByIdentifier(paintingsNested, app);
apiHandler.fetchPaintingsByGallery(paintingsNested, app);
apiHandler.fetchPaintingsByArtist(paintingsNested, app);
apiHandler.fetchPaintingsByYears(paintingsNested, app);
apiHandler.fetchPaintingsByTitleText(paintingsNested, app);
apiHandler.fetchPaintingsByDominantColor(paintingsNested, app);

let port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running at port = " + port);
});