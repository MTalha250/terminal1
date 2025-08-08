echo "Building the project..."
python3 -m pip install -r requirements.txt

echo "Collect Static..."
python3 manage.py collectstatic --noinput --clear

# Vercel static output expects "staticfiles_build" per vercel.json
mkdir -p staticfiles_build
if [ -d "staticfiles" ]; then
  cp -r staticfiles/. staticfiles_build/
fi