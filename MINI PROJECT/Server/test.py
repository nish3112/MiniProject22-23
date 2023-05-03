import pickle

# Load the saved model from pickle file
with open('Server/umap_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Prepare data for prediction
data = [[1,2,3,4,5,6,78,9,10,12,11,21,12]]

# Make predictions
predictions = model.transform(data)

# Print the predictions
print(predictions)
