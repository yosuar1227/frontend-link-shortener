data "aws_iam_policy_document" "s3_polcicy_document" {
  statement {
    sid = "S3GetObjectForCloudFront"
    actions = [
      "s3:GetObject",
      "s3:ListBucket"
    ]

    resources = [
      aws_s3_bucket.frotendApp.arn,
      "${aws_s3_bucket.frotendApp.arn}/*"
    ]


    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.frotendAppAccessIdentity.iam_arn] //identifier of clufront
    }
  }
}
