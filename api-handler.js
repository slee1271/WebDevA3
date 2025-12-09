function fetchAllArtists(artists, app) {
  app.get("/api/artists", (req, resp) => {
    resp.json(artists);
  });
}

function fetchArtistsByNation(artists, app) {
  app.get("/api/artists/:country", (req, resp) => {
    const country = req.params.country.toLowerCase();
    const matches = artists.filter(
      (artist) => artist.Nationality.toLowerCase() === country
    );
    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(
        createErrorMessage(`Couldn't find a match with country '${country}'`)
      );
    }
  });
}

function fetchAllGalleries(galleries, app) {
  app.get("/api/galleries", (req, resp) => {
    resp.json(galleries);
  });
}

function fetchGalleriesByNation(galleries, app) {
  app.get("/api/galleries/:country", (req, resp) => {
    const country = req.params.country.toLowerCase();
    const matches = galleries.filter(
      (gallery) => gallery.GalleryCountry.toLowerCase() === country
    );
    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(
        createErrorMessage(`Couldn't find a match with country '${country}'`)
      );
    }
  });
}

function fetchAllPaintings(paintings, app) {
  app.get("/api/paintings", (req, resp) => {
    resp.json(paintings);
  });
}

function fetchPaintingByIdentifier(paintings, app) {
  app.get("/api/painting/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const matches = paintings.filter((painting) => painting.paintingID === id);

    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(createErrorMessage(`Couldn't find a match with id '${id}'`));
    }
  });
}

function fetchPaintingsByGallery(paintings, app) {
  app.get("/api/painting/gallery/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const matches = paintings.filter(
      (painting) => painting.gallery.galleryID === id
    );

    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(createErrorMessage(`Couldn't find a match with id '${id}'`));
    }
  });
}

function fetchPaintingsByArtist(paintings, app) {
  app.get("/api/painting/artist/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const matches = paintings.filter(
      (painting) => painting.artist.artistID === id
    );

    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(createErrorMessage(`Couldn't find a match with id '${id}'`));
    }
  });
}

function fetchPaintingsByYears(paintings, app) {
  app.get("/api/painting/year/:min/:max", (req, resp) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);
    const matches = paintings.filter(
      (painting) => painting.yearOfWork > min && painting.yearOfWork < max
    );

    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(
        createErrorMessage(
          `Couldn't find a match with years between '${min}' to '${max}'`
        )
      );
    }
  });
}

function fetchPaintingsByTitleText(paintings, app) {
  app.get("/api/painting/title/:text", (req, resp) => {
    const text = req.params.text.toLowerCase();
    const matches = paintings.filter((painting) =>
      painting.title.toLowerCase().includes(text)
    );

    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(
        createErrorMessage(
          `Couldn't find a match with titles including '${text}'`
        )
      );
    }
  });
}

function fetchPaintingsByDominantColor(paintings, app) {
  app.get("/api/painting/color/:name", (req, resp) => {
    const name = req.params.name.toLowerCase();
    const matches = paintings.filter((painting) => {
      const dominateColors = painting.details.annotation.dominantColors;
      return dominateColors.find((color) => color.name.toLowerCase() === name);
    });

    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(
        createErrorMessage(`Couldn't find a match with color '${name}'`)
      );
    }
  });
}

function createErrorMessage(msg) {
  return { message: msg };
}

module.exports = {
  fetchAllArtists,
  fetchArtistsByNation,
  fetchAllGalleries,
  fetchGalleriesByNation,
  fetchAllPaintings,
  fetchPaintingByIdentifier,
  fetchPaintingsByGallery,
  fetchPaintingsByArtist,
  fetchPaintingsByYears,
  fetchPaintingsByTitleText,
  fetchPaintingsByDominantColor,
};