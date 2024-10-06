import pandas as pd
import numpy as np

df = pd.read_csv('./data/climate_data.csv')
df = df.drop(['N', 'P', 'K', 'ph'], axis = 1)

def get_embeddings():
    crops = df['label'].unique()
    embeddings = pd.DataFrame()

    for crop in crops:
        cropdf = df.loc[df['label'] == crop]
        rowdict = {}

        for col in cropdf:
            if col == 'label': continue

            mn = cropdf[col].mean()
            rowdict[col] = mn

        rowdict['label'] = crop
        rowdf = pd.DataFrame([rowdict])

        embeddings = pd.concat([embeddings, rowdf], ignore_index = True)

    return embeddings

def get_k_nearest(item, embeddings, k = 3):
    npitem = item.to_numpy()
    maxes =  embeddings.drop(['label'], axis = 1).to_numpy().max(axis = 0)
    options = []

    for idx, embedding in embeddings.iterrows():
        nprow = embedding.drop(['label']).to_numpy()
        dist = np.linalg.norm((npitem / maxes) - (nprow / maxes))
        options.append([dist, embedding['label']])

    options.sort()

    for i in range(1, k + 1):
        print(f"Option {i}: {options[i][1]}")