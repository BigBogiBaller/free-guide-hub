-- Create a public bucket for videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('videos', 'videos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access
CREATE POLICY "Public read access for videos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'videos');